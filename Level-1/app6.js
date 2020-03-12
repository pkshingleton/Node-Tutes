//____________________________________________________________________| PIPES |______/

//-- A 'pipe' directs traffic/data from a source to another location. 
//   The benefit here is that we don't need an event-listener to trigger these actions. Check it out:


//-- Import the filesystem + http modules
const fs = require('fs')
const http = require('http')
//-- This module just gives our console some style
require('colors')

//-- Data location
let srcFile = "../index.html"

//-- Server locations
let port = 1337
let address = '127.0.0.1'


//-----------------------------------------------------------

//-- The 'createServer()' argument is where we set what happens when the server hears a request:
const server = http.createServer((request, response) => {

    //-- Log any incoming requests (...with style...)
    console.log(`<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan.bold}`)

    //-- Attach code '200' (success) to the response header.
    response.writeHead(200)

    //-- Set data read-stream. This is where we'll get the data we want to return as a response.
    //   (This part can be anything, like a database query, read a file, find a video or song, etc.)  
    const readStream = fs.createReadStream(srcFile)

    //-- Piping has to originate from a read-stream. In other words, a 'pipe' directs incoming data from a source to a destination. 
    //   So here, the read-stream will pipe directly into the response.
    readStream.pipe(response)

        //-- (Note: We could simply do all the above with this):
        //   fs.createReadStream(__data-source__).pipe(response)

    //-- We'll log what just happened. Fancifully. Communication is key :)
    console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${srcFile.brightGreen.bold}`)

//-- Close the response and set the location to listen for incoming requests:    
}).listen(port, address)

//------------------------------------------------------------


//-- This part isn't necessary, but is generally a good idea (the styling is completely unnecessary)
const serverMsg = " SERVER RUNNING"
const bar = "\n----------------\n"

console.log(`\n\n${bar.dim.gray}${serverMsg.bold.brightGreen}${bar.dim.gray} ${address.dim.white}:`+`${port}`.bold.brightCyan +`${bar.dim.gray}`);


