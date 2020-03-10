
//_____________________________________| TUTORIAL / MODULE - DEFINE |____/



//-- Function 1
const counter = arr => `There are ${arr.length} elements in this array.`

//-- Function 2
const adder = (a,b) => `The sum of the 2 numbers is ${ a+b }`

//-- Some value
let pi = 3.142


//-- Export, i.e. allow this file's functions and values to be called/referenced in other script files
//-- This is the ES2015 (old school js) way of exporting:
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
}

//-- The ES6 method involves a few extra steps and configuration. Save that for another 'tute...