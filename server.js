    // Difference Between Node Js and Javascript.

    //The console is the terminal Window
    // Global Instead of window object 
    //When importing , we use "require"
    //CommonJs modules instead of ES6 modules.
    //Missing Js Apis like fetch
    
    //console.log("Hello World")
    //const me = require("os")
    //Os operating system.

    //A couple of things we could get from "os"
    // console.log(me.homedir())
    // console.log(me.networkInterfaces())
    // console.log(me.hostname())
    // console.log(me.type())
    // console.log(me.userInfo())
    // console.log(me.version())
    // console.log(me.machine())

    //file name and directory
    // console.log(__dirname)
    // console.log(__filename)

    //File Path
    //const path = require("path")
    // console.log(path)
    // console.log(path.basename(__filename))
    // console.log(path.dirname(__filename))
    // console.log(path.extname(__filename))

    //Also 
   // console.log(path.parse(__filename))


   //Importing The Maths file here
   const{add,sub, mult, div} = require("./maths")
   console.log(add(2,4))
   console.log(sub(2,4))
   console.log(mult(2,4))
   console.log(div(2,4))
