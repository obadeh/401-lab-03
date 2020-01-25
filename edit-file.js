'use strict';

const fs = require('fs');
const util = require('util');
const validator= require('./validator.js')

let file = `${__dirname}/data/person.json`;

// call back style

// fs.readFile(file, (err, data) => {
//   if (err) throw err;
//   let obj= JSON.parse(data.toString().trim());
//   console.log(obj);
// })



// Promise Style

let readFilePromise = util.promisify(fs.readFile)

readFilePromise(file)
  .then(data =>  {
   let obj= JSON.parse(data.toString().trim())
   console.log('original obj : ', obj);
   obj.firstName='ahmad';
   obj.married=true;
   obj.kids=3;
   console.log('change to : ', obj);
   console.log('is object??? : ',validator.isValid(obj,validator.isObject));


  return obj;
  })
  .then((obj)=>{
    fs.writeFile(file,JSON.stringify(obj), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  }).then(()=>{
    readFilePromise(file)
   .then(data=>{
    let obj= JSON.parse(data.toString().trim())
    console.log('saved obj : ', obj);
   })
  })
  .catch(err => { throw err; })

 
