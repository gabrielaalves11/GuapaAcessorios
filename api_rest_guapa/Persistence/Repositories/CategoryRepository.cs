using api_rest_guapa.Persistence.Contexts;
using api_rest_guapa.Domain.Models;
using api_rest_guapa.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api_rest_guapa.Persistence.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Category>> ListAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task AddAsync(Category category)
        {
            await _context.Categories.AddAsync(category);
        }

        public async Task<Category> FindByIdAsync(int id)
        {
            var categoryProducts = _context.Categories.Include(category => category.Products).AsNoTracking();
            return await categoryProducts.FirstOrDefaultAsync(category => category.Id == id);
        }

        public async Task<IEnumerable<Category>> FindByNameAsync(string name)
        {
            return await _context.Categories.Where(x => x.Name.Contains(name)).ToListAsync();
        }

        public void Update(Category category)
        {
            _context.Categories.Update(category);
        }

        public void Remove(Category category)
        {
            _context.Categories.Remove(category);
        }
    }
}
