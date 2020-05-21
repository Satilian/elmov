using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using ElmoveApi.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace ElmoveApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private StoreService db;
        public AuthController(ILogger<AuthController> logger, StoreService store)
        {
            _logger = logger;
            db = store;
        }
         [HttpPost]
         [Route("signup")]
        public async Task<ActionResult> Signup(SignUpRequest user)
        {
            await db.users.Create(user);
            await Authenticate(user.Username, "user");
            return new StatusCodeResult(201);
        }
         [HttpPost]
         [Route("signin")]
        public async Task<ActionResult> Signin(SignInRequest req)
        {
            if (ModelState.IsValid) 
            {
                SignUpRequest user = await db.users.Get(req);
                if (user != null)
                {
                    await Authenticate(user.Username, user.Role);
                    return Ok();
                }
                ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return new StatusCodeResult(403);
        }

        private async Task Authenticate(string username, string role)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, username),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, role)
            };
            ClaimsIdentity id = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
    }
}