const logEvents = require('./logEvents');

const EvenEmitter = require('events');

class MyEmittter extends EvenEmitter{};

//Initalize object
const myEmittter = new MyEmittter();

//add listener for log event
myEmittter.on('log', (msg)=> logEvents(msg));

setTimeout(()=>{
    myEmittter.emit('log', 'Log event emitted');
}, 2000);