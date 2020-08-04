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
        public int postId { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public int userId { get; set; }

        [Column(TypeName = "nvarchar(100)")] 
        public string postContent { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string dateTime { get; set; }

    }
}
