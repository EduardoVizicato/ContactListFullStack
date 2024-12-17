using ContactList.Domain.Models;
using ContactList.Domain.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Domain.Repositories.Interfaces
{
    public interface IContactRepository
    {
        Task<List<ContactModel>> GetAllAsync();
        Task<ContactModel> GetByIdAsync(Guid id);
        Task<ContactRequest> AddAsync(ContactRequest request);
        Task<bool?> UpdateAsync(Guid id, ContactRequest request);
        Task<bool?> DesactiveAsync(Guid id);

    }
}
