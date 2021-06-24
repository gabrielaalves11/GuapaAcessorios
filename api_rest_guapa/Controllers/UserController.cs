using api_rest_guapa.Domain.Models;
using api_rest_guapa.Domain.Services;
using api_rest_guapa.Extensions;
using api_rest_guapa.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("/api/[controller]")]

    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<UserResource>> ListAsync()
        {
            var users = await _userService.ListAsync();
            var resources = _mapper.Map<IEnumerable<User>, IEnumerable<UserResource>>(users);
            return resources;
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<UserResource> GetByIdAsync(int id)
        {
            var user = await _userService.FindByIdAsync(id);

            var resources = _mapper.Map<User, UserResource>(user);

            return resources;
        }

        [HttpGet("GetByLogin/{login}")]
        public async Task<IEnumerable<UserResource>> GetByloginAsync(string login)
        {
            var users = await _userService.FindByLoginAsync(login);
            var resources = _mapper.Map<IEnumerable<User>, IEnumerable<UserResource>>(users);

            return resources;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] SaveUserResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var user = _mapper.Map<SaveUserResource, User>(resource);
            var result = await _userService.SaveAsync(user);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);

            return Ok(userResource);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] SaveUserResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var user = _mapper.Map<SaveUserResource, User>(resource);
            var result = await _userService.UpdateAsync(id, user);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);

            return Ok(userResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _userService.DeleteAsync(id);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);

            return Ok(userResource);
        }
    }
}
