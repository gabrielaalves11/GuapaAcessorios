﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_rest_guapa.Resources
{
    public class ProductResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public int QuantityInPackage { get; set; }
        public string UnitOfMeasurement { get; set; }
        public int CategoryId { get; set; }
    }
}
