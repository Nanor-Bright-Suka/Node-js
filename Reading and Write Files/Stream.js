const fs = require('fs')

const rs = fs.createReadStream("./Lorem.txt", {encoding: 'utf-8'})
const ws = fs.createWriteStream("./WriteStream.txt")

// rs.on("data", (dataChunk) => {
//     ws.write(dataChunk)
// })
rs.pipe(ws)