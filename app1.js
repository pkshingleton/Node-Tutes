//________________________________________________________________________|-  EXPRESS.js / Templates -|______//
//
//-- Responses for GET / POST / DELETE:
//   app.get('route', function)
//   app.post('route', function)
//   app.delete('route', function)



//-----------------------------------------------------------//
//__ MODULES + VARS __

//-- Import Express.js + console colors
const express = require('express')
require('colors')

//-- Set listening locations
const address = '127.0.0.1'
const port = 1337
//-- Show in console that the server is started and where to go to find it
srvLog()



//-----------------------------------------------------------//
//__ APP OBJECT __

//-- Register 'app' as an Express object
const app = express()
//-- Set app port
app.listen(port)
//-- Use EJS templating engine for rendering ('response.render()') dynamic pages
app.engine('ejs', require('ejs').renderFile)
//-- Set views filetype
app.set('view engine', 'ejs')



//-----------------------------------------------------------//
//__ MIDDLEWARE __

//-- Set static directory for serving stylesheet 
app.use('/assets', express.static(__dirname + '/assets'))



//-----------------------------------------------------------//
//__ SERVER __

//-- Instead of defining a server and using conditionals to serve the client pages, we use Express.
//   This allows us to set a route as the first argument, and a function (request/response) as the second.

    //-- Return the 'Index' page
    app.get('/', (req, res) => {
        reqLog(req)
        //-- Serve page:
        res.render('./partials/index.ejs', { root: __dirname })
        resLog(res)
    })

    //-- Return the 'Contact' page
    app.get('/contact', (req, res) => {
        reqLog(req)
        //-- Serve page:
        res.render('./partials/contact.ejs', {qs: req.query})
        //-- Log
        resLog(res)
        //-- Takes requests with a query string and creates key/value object pairs 
        console.log(req.query);
    })

    //-- Example of a basic dynamic request using 'request.params'. 
    //   (This can be ID, name, or whatever you put in the route after '/:' below.)
    app.get('/profile/:name', (req, res) => {
        reqLog(req)
        //-- Here you can query database or something to get profile details, etc...
        //   (We'll pretend this came from a database somewhere else)
        var dataExample = {
            age: 32,
            occupation: 'banker',
            status: 'fugitive',
            equip: [
                {"name":'jacket', "qty": 1},
                {"name":'shoes', "qty": 2},
                {"name":'hammer', "qty": 1},
            ]
        }
        
        //-- Serve page + data refs
        res.render('profile.ejs', {
            person: req.params.name, 
            data: dataExample,
        })

        //-- Logs
        resLog(res)
        console.log(`--> `.brightGreen + `Profile `.green.dim + ` :: `.gray.dim + `${req.params.name}\n`.white.bold)
    })

    //-- Return the '404' page
    app.get('*', (req, res) => {
        reqLog(req)
        //-- Serve page:
        res.sendFile('./404.html', { root: __dirname })
        res.status(404)
        resLog(res)
    })



//-----------------------------------------------------------//
//__ FUNCTIONS __

function srvLog() {
//-- Returns a message in console that server is running + location
    const serverMsg = " SERVER RUNNING"
    const bar = "\n----------------\n"
    console.log(`\n\n${bar.dim.gray}${serverMsg.bold.brightGreen}${bar.dim.gray} ${address.dim.white}:`+`${port}`.bold.brightCyan +`${bar.dim.gray}`);
}

function reqLog(request) {
//-- Takes request object and logs the origin
    console.log(`\n<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan}`.bold)
}

function resLog(response) {
//-- Takes response object and logs status
    let resText = `[Status]`
    let resCode = `${response.statusCode}`
    let responseText = `${resText.dim.gray} ${resCode.bold.green}`
    console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${responseText}`)
}