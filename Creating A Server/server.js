 const http = require("http")
 const path = require("path")
 const fs = require("fs")
const fsPromises = require("fs").promises
 

const logEvents = require("./logEvents")
const EventEmitter = require("events")
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.emit('events', 'Log Event Emitted');


//Port 
const  PORT = process.env.PORT || 3000

const ServeFile = async (filePath, ContentType, response) => {
    try {
        const rawdata = await fsPromises.readFile(filePath, 'utf8');
        const data = ContentType === "application/json" ?  JSON.parse(rawdata) : rawdata;
        response.writeHead(200, { "Content-Type": ContentType })
        response.end(
            ContentType === "application/json" ? JSON.stringify(data) : data
        );
        
    } catch(err){
        console.log(err)
        response.StatusCode = 500;
        response.end();
    }
}


//Creating A Server
const server = http.createServer((req, res) => {
   console.log(req.url, req.method)
    //Dealing With /favicon
    // if (req.url === "/favicon.ico") {
    //     res.writeHead(204, { 'Content-Type': 'image/x-icon' })
    //     res.end()
    
    // } else {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' })
    //     res.end("Hello, Secure World with http you think! Hahaha!!")    
    // }
    
    //Good Way Of Handling Things
    // let filePath;
    // switch (req.url) {
    //     case "/":
    //         res.statusCode = 200;
    //         filePath = path.join(__dirname, "Views", "index.html");
    //         fs.readFile(filePath, "utf8", (err, data) => {
    //             if (err) {
    //                 res.statusCode = 500;
    //                 res.end("Error reading index.html")
    //             } else {
    //                 res.setHeader('Content-Type', 'text/html')
    //                 res.end(data)
    //             }
    //         })
    //         break;
        
    //     case "/Css/Styles.css":
    //         res.statusCode = 200;
    //         filePath = path.join(__dirname, "Css", "Styles.css");
    //         fs.readFile(filePath, "utf8", (err, data) => {
    //             if (err) {
    //                 res.statusCode = 500;
    //                 res.end("Error reading Styles.css")
    //             } else {
    //                 res.setHeader('Content-Type', 'text/css')
    //                 res.end(data)
    //           }
    //         })
    //         break;
        
    //     default:
    //         res.statusCode = 404;
    //         res.end("Page not found");
    //         break;
    // }
    
    //Better way of handling the get request in a server
    let ContentType;
    const extension = path.extname(req.url)
    switch (extension) {
        case ".html":
            ContentType = "text/html";
            break;
        case ".css":
            ContentType = "text/css";
            break;
        case ".js":
            ContentType = "text/javascript";
            break;
        case ".json":
            ContentType = "application/json";
            break;
        case ".jpg":
            ContentType = "image/jpeg";
            break;
        case ".png":
            ContentType = "image/png";
            break;
        case ".txt":
            ContentType = "text/plain";
            break;
        default:
            ContentType = "text/html";
    }

    //Dealing With The File Path
    let filePath = ContentType === "text/html" && req.url === "/" ? path.join(__dirname,"Views","index.html") : ContentType === "text/html" && req.url.slice(-1) === "/" ? path.join(__dirname,"Views", req.url, "index.html"): ContentType === "text/html" ? path.join(__dirname,"Views", req.url) : path.join(__dirname, req.url)


    //Fixing Address Issue. Making The .html not required.
    if (!extension && req.url.slice(-1) !== "/") filePath += ".html";


    //Checking If File Exist
    const fileExist = fs.existsSync(filePath);

    if (fileExist) {
        ServeFile(filePath,ContentType,res)
    } else {
        switch (path.parse(filePath).base){
            case "old-page.html":
                res.writeHead(301, { "Location": '/new-page.html' })
                res.end()
                break;
            case "www-page.html":
                res.writeHead(301, { "Location": "/" })
                res.end()
                break;
            
            default:
            //Server a 404 response
                ServeFile(path.join(__dirname,"Views","404.html"),  "text/html", res)
     }
    }
})

//Server Listening
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})








