using ContactList.Domain.Models;
using ContactList.Domain.Models.Requests;
using ContactList.Domain.Repositories.Interfaces;
using ContactList.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Infrastructure.Repositiories
{
    public class ContactRepository : IContactRepository
    {
        private readonly ApplicationDataContext _context;
        public ContactRepository(ApplicationDataContext context)
        {
            _context = context;
        }
        public async Task<ContactRequest> AddAsync(ContactRequest request)
        {
            var Contact = new ContactModel()
            {
                Name = request.Name,
                PhoneNumber = request.PhoneNumber,
                IsActive = request.IsActive,
            };
            await _context.Contacts.AddAsync(Contact);
            await _context.SaveChangesAsync();
            return request;
        }

        public async Task<bool?> DesactiveAsync(Guid id)
        {
            var Isactive = await GetByIdAsync(id);
            Isactive.IsActive = false;
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<List<ContactModel>> GetAllAsync()
        {
            return await _context.Contacts.Where(x => x.IsActive).ToListAsync();
        }

        public async Task<ContactModel> GetByIdAsync(Guid id)
        {
            return await _context.Contacts.FindAsync(id);
        }

        public async Task<bool?> UpdateAsync(Guid id, ContactRequest request)
        {
            var contactToUpdate = await GetByIdAsync(id);
            if (contactToUpdate == null)
            {
                return null;
            }

            contactToUpdate.Name = request.Name;
            contactToUpdate.PhoneNumber = request.PhoneNumber;
            contactToUpdate.IsActive = request.IsActive;

            _context.Contacts.Update(contactToUpdate);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
