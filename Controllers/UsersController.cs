using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using ElmoveApi.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace ElmoveApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private IUsersRepository repository;

        public UsersController(ILogger<UsersController> logger, IUsersRepository r)
        {
            _logger = logger;
            repository = r;
        }

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> Create(User user)
        {
            await repository.Create(user);
            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        }

        // GET: api/Users
        [HttpGet]
        public async Task<IEnumerable<User>> Search()
        {
            return await repository.Search();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(long id)
        {
            var user = await repository.GetById(id);
            
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users
        [HttpPut]
        public async Task<ActionResult<User>> Update(User user)
        {
            await repository.Update(user);
            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<long>> Delete(long id)
        {
            await repository.Delete(id);
            return id;
        }
    }
}