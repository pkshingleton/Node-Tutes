//____________________________________________________________________| STREAMS and BUFFERS - Reading |______/

//-- Everybody sees the results of this stuff every day. Streaming video sites rely on it. This is how it works:


//-- Import our core modules (the old-school way)
const http = require('http')
const fs = require('fs')


//-- This filesystem method creates an incoming "stream", carrying a data object to a location set in the argument. 
//   ('__dirname' is just a quick way to grab our current location, then + 'filename.txt')

//-- We use this to open a channel for passing something (data) to a specified end-point. EX: segments of video to a client.
//   (The encoding doesn't need to be specified as an argument to see the file contents)  
const myReadStream = fs.createReadStream(__dirname +  '/readMe-test.txt')

//-- Now that we have a place to read from, we can set events to trigger functions with an event-listener. 
//   This will set the stream to return a console.log when the 'data' event triggers.
myReadStream.on('data', chunk => {
    console.log(`New chunk received: \n${chunk}`);
})


