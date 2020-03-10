//____________________________________________________________________| SERVERS |____/

//-- Core module enabling web and HTTP functions. 
//   Specifically, things to start and configure a server- like addressing, urls, and port numbers.
const http = require('http')

//-- Creates the actual server instance with a callback to handle 'request' and 'response'. 
//   When this server receives a request (first argument), a function executes whatever we return below as the response.

//-- The reponse contains a 'Header' which takes arguments for each status code. 
//   In this case, '200' (ok) will return an object that defines the type of content we're reponding with.
//   We can set up different conditions for different status codes (ex. 401 - unauthorized, 404 - not found, etc.).
const server = http.createServer((request, response) => {
    console.log(`Request was made to: ${request.url}`);  //<-- (Refresh the browser and look at the console!)
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end(`Success! \nBut it's lonely here. \nSo cold. So very, very cold...`)
})

//-- Using the server instance defined above, we can set the port range and address that clients will send requests to
//   The address here is just a local address (loop-back), but is usually shares an address with wherever this is hosted. 
let port = 1337
let address = '127.0.0.1'

server.listen(port, address)
console.log(`🟢 SERVER RUNNING  \n🟢 ${address}:${port}`);



