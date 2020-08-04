using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class BlogPost
    {
        [Key]
        public int blogPostId { get; set; }
        
        [Column(TypeName = "int")]
        public int blogUserId { get; set; }

        [Column(TypeName = "nvarchar(100)")] 
        public string bpContent { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string blogDateTime { get; set; }

    }
}
