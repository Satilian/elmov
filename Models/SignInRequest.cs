using System.ComponentModel.DataAnnotations;

namespace ElmoveApi.Models
{
    public class SignInRequest
    {
        [Required(ErrorMessage = "Не указан Email")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Не указан пароль")]
        public string Password { get; set; }
    }
}