console.log("Library Run");
function sum(a,b)
{
    return a+b;
}
let var2=10;
//exports.sum=sum;        //Exporting Statement
console.log(sum(8,9));
console.log('Library sum called ');
console.log(exports===module.exports)
console.log(exports);
exports=module.exports={        //This statement is necessary as if exports and module.exports do not point to
    sum:sum                     // each other then the require statement doesn't work .
}
module.exports.var2=var2;
console.log(exports);