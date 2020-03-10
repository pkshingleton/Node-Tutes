//____________________________________________________________________| READ and WRITE |____/


//-- Built-in (core) module for basic filesystem and IO functions
const fs = require('fs')

//-- Call 'readFileSync' to synchronously open a file and set encoding
let foundText = fs.readFileSync('readMe.txt', 'utf8')

//-- Use filesystem module function to synchronously write data to a file. 
//   If asynchronous ('writeFile'), there has to be a callback function to execute on completion. 
fs.writeFileSync('writeMe.txt', foundText)


//---------------------------------------------------------------------------------


//-- Function similar to above, but asyncronous, and includes a callback function.
//   Because this isn't synchronous, the below log will appear first while this function executes.
fs.readFile('readme.txt', 'utf8', (error, data) => {
    fs.writeFile('copied-from-readme.txt', data, error => console.log(error))
})


//---------------------------------------------------------------------------------


//-- This makes a directory. The first argument is the name ('string'), and the second is a callback. 
//   Since we want to do something after making the folder, the callback is a function that creates a file. 
//   The file is created synchronously while reading the contents of another, and copying it into the new file. 

fs.mkdir('stuff', () => {
    fs.readFile('readMe.txt', 'utf8', (error, data) => {
        fs.writeFileSync('./stuff/copied-from-readme.txt', data)
    })
})


//---------------------------------------------------------------------------------

