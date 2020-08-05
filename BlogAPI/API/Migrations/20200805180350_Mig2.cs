using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class Mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "bpTitle",
                table: "BlogPosts",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bpTitle",
                table: "BlogPosts");
        }
    }
}
