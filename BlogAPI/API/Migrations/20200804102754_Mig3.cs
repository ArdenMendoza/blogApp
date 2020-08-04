using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class Mig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "content",
                table: "BlogPosts");

            migrationBuilder.RenameColumn(
                name: "user",
                table: "BlogPosts",
                newName: "postContent");

            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "BlogPosts",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userId",
                table: "BlogPosts");

            migrationBuilder.RenameColumn(
                name: "postContent",
                table: "BlogPosts",
                newName: "user");

            migrationBuilder.AddColumn<string>(
                name: "content",
                table: "BlogPosts",
                type: "nvarchar(100)",
                nullable: true);
        }
    }
}
