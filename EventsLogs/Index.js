 
 const logEvents = require("./logEvents")

const EventEmitter = require("events")
 
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('events', (message) => logEvents(message));
setTimeout(() => {
    myEmitter.emit('events','Log Event Emitted');
},200)
