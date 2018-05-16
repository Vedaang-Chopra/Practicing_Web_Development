console.log("Main Run ");
const lib=require('./f-09(Module for Import Export)');            //Importing Statement
console.log(`Imported library`);
console.log(lib.sum(3,4));
console.log(`Printed Sum of main Function`);
console.log(exports===module.exports)
console.log(lib.var2)               //Exporting Multiple values