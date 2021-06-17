using api_rest_guapa.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Domain.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> ListAsync();
        Task AddAsync(Product product);
        Task<Product> FindByIdAsync(int id);
        Task<IEnumerable<Product>> FindByNameAsync(string name);
        void Update(Product product);
        void Remove(Product product);
    }
}
