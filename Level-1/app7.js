//____________________________________________________________________| SERVING JSON |______/

//-- Import the filesystem + http modules
const fs = require('fs')
const http = require('http')
//-- This module just gives our console some style
require('colors')



//-- Server locations
let port = 1337
let address = '127.0.0.1'

//-- Basic json object
const myObj = {
    name: 'Colonel Mustard',
    level: 10,
    class: 'Ninja',
    weapon: 'Fisticuffs',
    armor: 'Pleated dress slacks',
    spells: ['fireball', 'lightning', 'tornado', 'blizzard']
}

let type = typeof(myObj)

//-----------------------------------------------------------

const server = http.createServer((request, response) => {
    console.log(`<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan.bold}`)
    response.writeHead(200)
    console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${type.brightGreen.bold}`)
    response.end(JSON.stringify(myObj))    
})

server.listen(port, address)

//------------------------------------------------------------



//-- This part isn't necessary, but is generally a good idea (the styling is completely unnecessary though)
const serverMsg = " SERVER RUNNING"
const bar = "\n----------------\n"

console.log(`\n\n${bar.dim.gray}${serverMsg.bold.brightGreen}${bar.dim.gray} ${address.dim.white}:`+`${port}`.bold.brightCyan +`${bar.dim.gray}`);