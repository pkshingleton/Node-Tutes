//_______________________________________________________________________|-  TODO  -|______//
/*
*   This is the MVC back-end for a basic todo app.
*/

//-----------------------------------------------------------/ IMPORTS /----//

//-- Import modules (Express + console colors + my custom logger)
const express = require('express')
require('colors')
const myLog = require('./myLog')
require('axios')

//-- Import created data controller module
const todoController = require('./controllers/todoController')



//-----------------------------------------------------------/ SETUP /----//

//-- App / Main object
const app = express()

//-- App / Template engine
app.set('view engine', 'ejs')

//-- App / Set static files directory
app.use(express.static(__dirname + '/todo'))

//-- Server vars
const address = '127.0.0.1'
const port = 1337

//-- App / Operating port
app.listen(port)



//-- Call controller and pass in the 'app' (Express) main object. 
//   This way we can define routes etc. in a separate module and keep this file concise.
todoController(app)

//-- Broadcast server location in console using my module
myLog.srvLog(address, port)

