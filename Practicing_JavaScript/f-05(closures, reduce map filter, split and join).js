/***********************************************************************************************************************************/
//Closures.....................................................................................................
"use strict";
function createCounter() {
    let a=0;
    function count() {
        return ++a;
    }
    return count;
}
let mycounter=createCounter();
console.log(mycounter());
console.log(mycounter());
/***********************************************************************************************************************************/

//Array Reduce,Map,Filter.....................................................................................................

let arr=[1,2,3,4,5,6,7,8];
let sqrr=arr.map(function (item,index,array)
{                                                  //This  map function is used to access each element of array and used
    return item*item;                              //to change array's every member value.Thus the function passed into
                                                   //map having three arguments item index and array refer to each
});                                                //element's attributes.eg. item=1,index=0,array="arr"
console.log(sqrr);
console.log(Math.sqrt(sqrr[4]));

let eqrr=arr.map(function (item,index,array)
{
    return array[arr.length-index-1];
});
/*let zqrr=arr.map(function (d,i,a) {
    if(i==0)
        return d;
    return a[i-1]+a[i];

})
console.log("Fibonacci:")
console.log(zqrr)*/
console.log(eqrr);

let arr1=[1,2,3,4,5,6,7,8,9,0];








