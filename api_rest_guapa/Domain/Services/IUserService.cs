using api_rest_guapa.Domain.Models;
using api_rest_guapa.Domain.Services.Communication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Domain.Services
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(String login, String password);
        Task<IEnumerable<User>> ListAsync();
        Task<UserResponse> SaveAsync(User user);
        Task<User> FindByIdAsync(int id);
        Task<IEnumerable<User>> FindByLoginAsync(string name);
        Task<UserResponse> UpdateAsync(int id, User user);
        Task<UserResponse> DeleteAsync(int id);
    }
}
