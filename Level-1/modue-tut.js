
//_____________________________________| TUTORIAL / MODULE - USE |____/


//-- ES6 (**  NEED TO HAVE "type" : "module" IN 'package.json'  **)
//let counter = import ('./count')

//-- ES2015 <
const stuff = require('./count')
  
    //-- 'stuff' is referenced as the 'top-level' or root of the module, so it pulls in all the code and we have to 
    // specify what we want when we use it. Do this with 'stuff.x', where 'x' is whatever you called it in the source file. 

//-- This relies on code defined in 'count.js'. Notice in 'stuff.counter',
// the '.counter' part is what we defined when we imported everything. Whatever you name it in this file during 'require'
// is what you have to call it. It then acts as an extension of the 'top-level' name we chose for the imported module.  
console.log(stuff.counter( 
    [ 
        'Jimbo', 
        'Jessup', 
        'Jiminy', 
        'Jowshoeuh' 
    ]
))

//-- Use imported things by referencing them as methods of the top-level / root, as if they were methods of functions
// It works like using object 'dot-notation', because exporting treats modules essentially like objects. 
console.log(stuff.adder(5, 6))
console.log(stuff.adder(stuff.pi, 5))



