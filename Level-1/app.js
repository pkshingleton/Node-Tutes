//_______________________________________________________| NODE - TUTORIAL |____/

const events = require('events')


class Person extends events.EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}


let firstGuy = new Person('Jimmy')
let secondGuy = new Person('Ricky')
let anotherGuy = new Person('Ryu')
let lastGuy = new Person('Tony Lee')

const houseParty = [ firstGuy, secondGuy, anotherGuy, lastGuy ]


houseParty.forEach(person => {
    person.on('speak', message => {
        console.log(`${person.name} said: ${message}`);
    })
})


firstGuy.emit('speak', 'Hey dudes.');
secondGuy.emit('speak', 'I want fries, guys')
anotherGuy.emit('speak', 'Sorry bruh, but we all out.')
lastGuy.emit('speak', 'Go ask the first guy...')
