'use strict' ;

let validator =  module.exports = {};


validator.isValid= function(obj,rules){
return rules(obj)
}


validator.isObject = (input) => {
    if(Array.isArray(input)){return false;}
    return typeof input === 'object';
  };
