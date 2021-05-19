using api_rest_guapa.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Domain.Services
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(String login, String password);
    }
}
