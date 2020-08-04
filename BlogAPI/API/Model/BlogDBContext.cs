using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class BlogDBContext: DbContext
    {
        public BlogDBContext(DbContextOptions<BlogDBContext> options):base(options)
        {

        }

        public DbSet<BlogPost> BlogPosts{ get; set; }

    }
}
