console.log('This is a log run through NPM')

const Moment = require('moment')

const currentTime = new Moment();
console.log(currentTime.format('h:mm:ss a'));