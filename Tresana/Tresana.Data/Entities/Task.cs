﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Tresana.Data.Entities
{
    public class Task 
    {
        [Key]
        public int Id{ get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? FinishDate { get; set; }
        public int? Estimation { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> ResponsibleUsers { get; set; }
        public String Status { get; set; }
        public User Creator { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DueDate { get; set; }

        public Task()
        {
            ResponsibleUsers = new List<User>();
        }

    }
}
