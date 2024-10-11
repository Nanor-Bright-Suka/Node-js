const { format } = require("date-fns")
const { v4: uuid } = require("uuid")

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");


//logEvents
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyy-M-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)

    try {
        if (!fs.existsSync(path.join(__dirname, "logs"))) {
            await fsPromise.mkdir(path.join(__dirname, "logs"));
        }
        await fsPromise.appendFile(path.join(__dirname, "logs",'eventsLog.txt'), logItem)
    } catch(err) {
        console.log(err)
    }
}
module.exports = logEvents;