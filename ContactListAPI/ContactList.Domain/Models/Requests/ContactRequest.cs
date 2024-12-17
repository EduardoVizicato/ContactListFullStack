﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Domain.Models.Requests
{
    public class ContactRequest
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsActive { get; set; }
    }
}
