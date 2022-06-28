const fs=require('fs');
const path = require('path');


 function treepath(dirpath)
 {
  if( dirpath == undefined)
  {
    console.log('Please enter a valid directory path');
  }
  else 
  {
    let doesexist=fs.existsSync(dirpath);




    if(doesexist ==  true)
    {
      treeHelper(dirpath, ' ');
    }
  }
 }

  function treeHelper(targetpath, indent)
  {
      let checkforfiles= fs.lstatSync(targetpath).isFile();
       if( checkforfiles == true)
       {
         let filename = path.basename(targetpath);
         console.log(indent + '|-->' + filename);
       }
       else 
       {
         let dirname= path.basename(targetpath);
         console.log(indent + '|__'+ dirname);
         let childrenArr = fs. readdirSync(targetpath);
         for ( let i=0; i<childrenArr.length ;i++)
         {
            let childpath= path.join(targetpath, childrenArr[i]);
            treeHelper(childpath, indent + '\t');

         }
       }

  }
  module.exports=
  {
      treekey: treepath
  }
