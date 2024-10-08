const fs = require('fs')

if(!fs.existsSync("./MyFolder")){
    fs.mkdir("./MyFolder",(err) => {
            if(err) throw err;
            console.log("Directory Created")    
    })
}
 if(fs.existsSync("./MyFolder")){
    fs.rmdir("./MyFolder",(err) => {
            if(err) throw err;
            console.log("Directory Removed")
 
    })
}