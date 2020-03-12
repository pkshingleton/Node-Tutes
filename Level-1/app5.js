//____________________________________________________________________| STREAMS and BUFFERS - Writing |______/


//-- Import the modules we'll be using ('fs' = filesystem, and 'colors' is just to make the console logs less bland)
const fs = require('fs')
require('colors')


//-- Assign our source/destination files
let sourceFile = '/readMe.txt'
let newFile = '/writeMe.txt'


//-- Opens a stream to grab data FROM <-- a location, taking the file source as an argument
const myReadStream = fs.createReadStream(__dirname + sourceFile)

//-- Opens a stream to write data TO --> a location, so the argument will be the destination file
const myWriteStream = fs.createWriteStream(__dirname + newFile)


//-- The read-stream event-listener looks for 'data'. When it triggers, it calls a function.
//   The executed function will take the data and pass ('write') it somewhere, which we set eariler to be the destination file.
myReadStream.on('data', chunk => {
    console.log(`<-- `.cyan.bold +  `Streaming incoming data from: ` + `"${sourceFile}"`.cyan);
    console.log(`--> `.green.bold + `Writing data chunk to: ` + `"${newFile}"`.green);

    //-- This method passes our write-stream a chunk of data (from the read-stream event).
    //   Because we set the write-stream to point to a .txt file, that's where the chunk will end up, or be 'written' to.
    myWriteStream.write(chunk)
})

