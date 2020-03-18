//------------------------------------|  Data controller module for todo list. |-----------//

//-- Import some middleware magic
const bodyParser = require('body-parser')
const myLog = require('../myLog')

//-- Static data for tutorial pruposes. Ideally this gets fetched from a database, parsed JSON, etc. 
let dummyData = [
    {item: 'Fix dashboard performance bugs'},
    {item: 'Find more Node tutes'},
    {item: 'Add Samsara data to dashboard'},
]

//-- Assign imported 'bodyParser' module to use in POST requests
const urlencodedParser = bodyParser.urlencoded({extended:false})



//-----------------------------------------------------------/ ROUTES /----//

//-- References the Express app object (aka the entry-point) 
//   Specifically this will handle GET and POST requests and serve the responses
//   (And relay status with my exquisite totally necessary custom console logger)
module.exports = function(app){

    //--------------| GET |--------------
    //-- When client initiates GET request to '/todo'
    app.get('/todo', (req, res) => {
        //-- Log request
        myLog.reqLog(req)
        //-- Respond by rendering a page and including 'dummyData' (referenced with 'todos.whatever')
        res.render('todo.ejs', {todos:dummyData})
        //-- Log response
        myLog.resLog(res)
    })


    //--------------| POST |--------------
    //-- When client initiates POST request to '/todo'
    app.post('/todo', urlencodedParser, (req, res) => {
        //-- Log request + incoming object
        myLog.reqLog(req)
        console.log( `POST << ${JSON.stringify(req.body.item)}` );
        //-- Push POSTed data (todo item - string) to 'dummyData' array
        dummyData.push(req.body)
        //-- Respond by redirecting, which will refresh the page and display the data array (but now with new item)
        res.redirect('/todo')
        //-- Log response
        myLog.resLog(res)
    })


    //--------------| DELETE |--------------
    //-- When client initiates DELETE request to '/todo'
    app.delete('/todo/:item', (req, res) => {
        //-- Log request
        myLog.reqLog(req)
        
        let newData = dummyData.filter(todo => {
            let result = todo.item.replace(/ /g, '-') !== req.params.item
            return result
        })
        
        dummyData = newData
        res.json(dummyData)
      
        //-- Log response
        myLog.resLog(res)
    })
}
