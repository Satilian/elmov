using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace ElmoveApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private StoreService db;
        public DataController(StoreService store)
        {
            db = store;
        }
        [HttpGet]
        public async Task<string> Get()
        {
            return JsonConvert.SerializeObject(await db.data.Get());
        }
    }
}