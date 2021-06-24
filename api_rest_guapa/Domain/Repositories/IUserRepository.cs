using api_rest_guapa.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> FirstOrDefaultAsync(String login, String password);
        Task<IEnumerable<User>> ListAsync();
        Task AddAsync(User user);
        Task<User> FindByIdAsync(int id);
        Task<IEnumerable<User>> FindByLoginAsync(string login);
        void Update(User user);
        void Remove(User user);
    }
}
