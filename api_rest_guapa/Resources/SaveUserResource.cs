﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Resources
{
    public class SaveUserResource
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}