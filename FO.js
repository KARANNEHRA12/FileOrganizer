// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extensions
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

const { dir } = require('console');
// const fs= require('fs');
// const path= require('path');
const { isContext } = require('vm');
const organizewalifile = require('./Commands/organize');
const helpfile= require('./Commands/Help');
const treefile = require('./Commands/Tree');

let input= process.argv.slice(2);
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    image: ["png", "jpeg", "jpg"],
    app: ["exe", "dmg", "pkg", "deb" ,"msi"],
  };

let command = input[0];

switch(command)
{
    case "organize":
        organizewalifile.organizefnkey(input[1]);
        break;
     case "tree":
        treefile.treekey(input[1]);
        break;
    case "help":
       helpfile.helpfnkey()
        break;
    default:
        console.log("enter valid command");
        break;


}
