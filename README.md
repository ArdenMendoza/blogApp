A. SetupDatabase
You can do this in 2 ways
I. Via Migration
 1. Open "blogApp.NetToReact/BlogAPI/BlogAPI.sln"
 2. Select Api project in Solution Explorer Window
 3. From the menu bar, Select > Tools > NuGet Package Manager >  Package Manager Console
 4. In the console, execute "Add-Migration".
 5. It will ask for a migration name. This can be any string. You can  type something like "first migration" or something else.
 6. A Migration Class will be created under WebAPI > Migration  folder.
 7. After that, execute "Update-Database" in Package Manager Console.
 8. Database(BlogDB) with 1 table(dbo.BlogPosts) should now be created.

B. Run API server
 1. Open the solution ("blogApp.NetToReact/BlogAPI/BlogAPI.sln")
 2. On your keyboard, press Ctrl + F5.
 3. A windows terminal should open now. API server is running hooray!

C. Run UI server (You should have Visual Studio code installed)
 1. Open "blogApp.NetToReact/blogapp" folder in visualstudio. 
 2. You can do this via command prompt. Navigate to the folder. and type in "code ."
 3. This should open Visualstudio code with all the contents of that folder. 
 4. Open the terminal built into vscode. To do that you can press "Ctrl + ~". 
 5. In case there are missing references, in the terminal, execute "npm install" first to be sure that all dependencies are imported. This may take some time. Once you see "Happy hacking!", it means it's done. You may proceed to the next step. 
 6. In the terminal, execute "npm run start". 
 7. The blog app should now be opened in your browser(http://localhost:3000)
