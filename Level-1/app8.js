//___________________________________________________________________________| BASIC ROUTING |______//
//
//-- Configuring a server to handle different paths is basically a necessity in modern web development. 
//   We'll use some conditional logic to determine where to route the client given the url or the request. 


//-- Import the filesystem + http modules (and log styling)
const fs = require('fs')
const http = require('http')
require('colors')


//-- Server location assignments
let port = 1337
let address = '127.0.0.1'


//-----------------------------------------------------------
http.createServer((request, response) => {
    //-- Request log to keep track of what's coming in
    console.log(`<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan.bold}`)
    
    //-- Here's where we apply a conditional check on the request url, and respond with unique pages accordingly.  
    if (request.url === '/index' || request.url === '/'){
        //-- Construct a response for the '/index' page
        response.writeHead(200)
        //-- Set read-stream to source the desired html file and pipe it into the response body
        fs.createReadStream('../index.html').pipe(response)
        //-- (For the log)
        var returnedType = '200 (ok) | HTML'

    } else if (request.url === '/contact'){
        //-- Construct a response for the '/contact' page
        response.writeHead(200)
        //-- Set read-stream to source the desired html file and pipe it into the response body
        fs.createReadStream('../contact.html').pipe(response)
        //-- (For the log)
        var returnedType = '200 (ok) | HTML'

    } else if (request.url === '/api') {
        //-- This should come from a database, but for demo purposes, we'll show the JSON directly. 
        //   This could be a function that calls the database, or links to another file that defines that instance (EX: 'db.js')
        let dataToServe = {
            name: 'Colonel Mustard',
            level: 10,
            class: 'Ninja',
            weapon: 'Fisticuffs',
            armor: 'Pleated dress slacks',
            spells: ['fireball', 'lightning', 'tornado', 'blizzard']
        }
        //-- Construct a response for the '/contact' page
        response.writeHead(200, {"Content-Type":"application/json"})
        //-- (For the log)
        var returnedType = '200 (ok) | JSON'
        //-- The body of a response is text, so a JSON object will not be acceptable. So we have to convert the object into a string: 
        response.end(JSON.stringify(dataToServe))

    } else {
        //-- Construct a response for the 'ERROR: /404' page
        response.writeHead(404)
        fs.createReadStream('../404.html').pipe(response)
        var returnedType = '404 (not found) | HTML'
    }

    //-- (For the log)
    let type = returnedType
    //-- Response logging with some style
    console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${type.brightGreen.bold}\n`)

//-- Close the server and set its listening location
}).listen(port, address)


//------------------------------------------------------------


    const serverMsg = " SERVER RUNNING"
    const bar = "\n----------------\n"
    console.log(`
        \n${bar.dim.gray}${serverMsg.bold.brightGreen}${bar.dim.gray} ${address.dim.white}:`+`${port}`.bold.brightCyan +`${bar.dim.gray}
    `);


//------------------------------------------------------------


/*

http.createServer((request, response) => {
    console.log(`<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan.bold}`)
    if (request.url === '/index' || request.url === '/'){
        response.writeHead(200)
        let homePage = fs.createReadStream('../index.html')
        var returnedType = typeof(homePage)
        homePage.pipe(response)
    } else if (request.url === '/contact'){
        response.writeHead(200)
        let contactPage = fs.createReadStream('../contact.html')
        var returnedType = typeof(contactPage)
        contactPage.pipe(response)
    } else if (request.url === '/api') {
        let dataToServe = {
            name: 'Colonel Mustard',
            level: 10,
            class: 'Ninja',
            weapon: 'Fisticuffs',
            armor: 'Pleated dress slacks',
            spells: ['fireball', 'lightning', 'tornado', 'blizzard']
        }
        response.writeHead(200, {"Content-Type":"application/json"})
        var returnedType = typeof(dataToServe)
        response.end(JSON.stringify(dataToServe))
    }
    let type = returnedType
    console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${type.brightGreen.bold}`)
}).listen(port, address)

*/