'use strict';

const fs = require('fs');
const util = require('util')

let file = `${__dirname}/data/person.json`;

// Promise Style
// turn the fs.readFile into a promise
let readFilePromise = util.promisify(fs.readFile)

// then, call it 

readFilePromise(file)
  .then(data => console.log('Promise', data.toString().trim()))
  .catch(err => { throw err; });

