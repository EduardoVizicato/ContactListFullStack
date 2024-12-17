using ContactList.Domain.Models.Requests;
using ContactList.Domain.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController(IContactRepository contactRepository) : ControllerBase
    {
        private readonly IContactRepository _contactRepository = contactRepository;
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _contactRepository.GetAllAsync();
            if (data.Count == 0)
            {
                return NoContent();
            }

            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var data = await _contactRepository.GetByIdAsync(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] ContactRequest request)
        {
            var contactId = await _contactRepository.AddAsync(request);
            return CreatedAtAction(nameof(GetAll), new { Id = contactId }, request);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] ContactRequest request)
        {
            var updated = await _contactRepository.UpdateAsync(id, request);
            if (updated == null)
            {
                return NotFound();
            }

            if (!updated.Value)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Desactive(Guid id)
        {
            var deleted = await _contactRepository.DesactiveAsync(id);
            if(deleted == null)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
