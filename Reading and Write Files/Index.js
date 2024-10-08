

// const {readFile} = require("fs")
// const {writeFile} = require("fs")
// const {appendFile} = require("fs")
// const {rename} = require("fs")
// const path = require("path")

    //Instead of hardcoding the file name
    // readFile("./Starter.txt","utf-8",(err,data) => {
    //     if(err) {
    //         throw new Error("Error Please")
    //     }
    //    console.log(data)
    // })

    // readFile(path.join(__dirname,"starter.txt"), "utf-8", (err,data) => {
    //     if(err) {
    //         throw  err;
    //     }else {
    //         console.log(data)
    //     }
    // });

    // writeFile(path.join(__dirname,"reply.txt"),"Good To See You",(err) => {
    //     if(err) {
    //         throw new Error("Error Wai");
    //     }else {
    //         console.log("Good Job")
    //     }
    //     appendFile(path.join(__dirname,"reply.txt"),"Append Me",(err) => {
    //         if(err) {
    //             throw new Error("Error Append");
    //         }else {
    //             console.log("Append Job")
    //         }
    //     });
    //     rename(path.join(__dirname,"reply.txt"), path.join(__dirname,"Noreply.txt"),(err) => {
    //         if(err) {
    //             throw new Error("Error Rename");
    //         }else {
    //             console.log("Rename Job")
    //         }
    //     });

    // });
    

    // console.log("Hello My name is bright")

    // process.on("uncaughtException", err => {
    //     console.error("There was an uncaught error",err)
    //     process.exit(1)
    // })
    

    // Promise Base
    const path = require("path")
    const fsPromise = require("fs").promises

    const fileOps = async () => {
        try {
            const data = await  fsPromise.readFile(path.join(__dirname,"starter.txt"), "utf-8")
            console.log(data)
            await fsPromise.unlink(path.join(__dirname,"send.txt"))
            await fsPromise.unlink(path.join(__dirname,"Noreply.txt"))
            await fsPromise.writeFile(path.join(__dirname,"WritePromise.txt"),data)
            await fsPromise.appendFile(path.join(__dirname,"WritePromise.txt"),"My World of mathematics")
            await fsPromise.rename(path.join(__dirname,"WritePromise.txt"),path.join(__dirname,"RenamePromise.txt"))
    }catch(err){
        console.log(err.message);
    }
}
fileOps()