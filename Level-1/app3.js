//____________________________________________________________________| SERVERS |____/


//-- Core module enabling web and HTTP functions. 
//   Specifically, things to start and configure a server- like addressing, urls, and port numbers.
const http = require('http')
require('colors')



//-- Creates the actual server instance with a callback to handle 'request' and 'response'. 
//   When this server receives a request (first argument), a function executes whatever we return below as the response.

//-- The reponse contains a 'Header' which takes arguments for each status code. 
//   In this case, '200' (ok) will return an object that defines the type of content we're reponding with.
//   We can set up different conditions for different status codes (ex. 401 - unauthorized, 404 - not found, etc.).
const server = http.createServer((request, response) => {
    //-- Below log updates the console when new requests come in
    console.log(`<`.brightCyan.bold + `--`.dim.cyan + ` Incoming request ` + `::`.dim + ` ${request.url.brightCyan.bold}`);  
    //-- The method 'writeHead' defines what is included in the request header
    response.writeHead(200)
    //-- This is what you'll see on the page. (Note: it can be anything, but typically an application)
    response.end(`Success! \nBut it's lonely here. \nSo cold. So very, very cold... \n\n(Put a landing page here or something)`)
})



//-- Using the server instance defined above, we can set the port range and address that clients will send requests to
//   The address here is just a local address (loop-back), but is usually shares an address with wherever this is hosted. 
let port = 1337
let address = '127.0.0.1'



//-- This sets the server to actively listen for incoming traffic coming to the designated location and port
server.listen(port, address)

//-- Styles the log a bit to stand out among a mass of text ( 'npm install colors' )
const bar = "\n----------------\n"
const serverMsg = " SERVER RUNNING"

console.log(`\n\n\n${bar.dim.cyan}${serverMsg.bold.brightGreen}${bar.dim.cyan} ${address}:`+ `${port}`.bold.brightWhite + `${bar.dim.cyan}`);