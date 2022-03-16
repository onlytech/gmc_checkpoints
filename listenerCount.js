//import event module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

eventEmitter.emit('connection');
// count the number of listener to this event
var eventListeners = require('events');
var nb = eventListeners.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(nb + " Listner(s) listening to connection event");