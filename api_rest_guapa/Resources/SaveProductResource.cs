using api_rest_guapa.Domain.Helpers;
using api_rest_guapa.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Resources
{
    public class SaveProductResource
    {
        [Required]
        [MaxLength(30)]
        public string Name { get; set; }

        [Required]
        public short QuantityInPackage { get; set; }

        [Required]
        public int CategoryId { get; set; }
    }
}
