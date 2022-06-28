const fs=require('fs');
const path = require('path');

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



function organisefn(dirpath)
{
    let destpath;
    if( dirpath == undefined)
    {
        console.log("enter a vlaid path ");
        return;
    }
    else 
    {
        let doesexist= fs.existsSync(dirpath);
        if( doesexist == true)
        {
            destpath= path.join(dirpath,'organisedfiles');
            if(fs.existsSync(destpath)== false)
        {
            fs.mkdirSync(destpath);
        }
        else{
            console.log('Folder already exist');
        }

        }
        else{
            console.log('Please enter a valid path');
        }
        
    }
    organizehelper(dirpath,destpath);
}

function organizehelper(src, des)
{
    let childname= fs.readdirSync(src);
    
    // console.log(childname);
    for( let i=0;i<childname.length;i++)
    {
        let childaddress =path.join(src , childname[i]);
        let checkforfile= fs.lstatSync(childaddress).isFile();
        // console.log(childaddress +" " + checkforfile);

        if(checkforfile == true)
        {
            let filecategory = getcategory(childname[i]);
            // console.log(childname[i] + " belongs to " + filecategory)
            sendfiles(childaddress, des, filecategory);
        }
    }
}
function sendfiles(src, dest , filecategory )
{
    let catpath = path.join(dest , filecategory);
    if (fs.existsSync(catpath) == false)
    {
        fs.mkdirSync(catpath);
    }
    let filename = path.basename(src);
    let destpath = path.join(catpath, filename);
    fs.copyFileSync(src,destpath);
    fs.unlinkSync(src);
}


function getcategory(filename)
{
    let ext = path.extname(filename);
    // console.log(ext);
    ext= ext.slice(1);
    // Object type loop
    for ( let type in types)
    {
        let ctypearray = types[type];
        // console.log(ctypearray);
        for ( let i=0;i<ctypearray.length;i++)
        {
            if( ext== ctypearray[i])
            {
                return type;
            }
        }
    }

return "others";
}


module.exports={
    organizefnkey : organisefn
}