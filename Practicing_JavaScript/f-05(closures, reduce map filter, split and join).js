/***********************************************************************************************************************************/
//Closures.....................................................................................................
"use strict";
function createCounter() {
    let a=0;                            //Any function having another definition inside it then the local variables of
    function count() {                  // of outside function are given a scope closure inside the function definition
        return ++a;                     //of inside function
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
let evenarr=arr1.filter(function (item,index,array)
{                                                   //The filter function is used to access every member of array and
    return (item%2==0);                             // then create a new array by coping some members of array into
})                                                  // the new array according to the condition specified.
let a1,a2;
let perfectsqr=arr1.filter(function (item,index,array) {

    a1=Math.sqrt(item);
    a2=Math.trunc(a1);
    console.log("For " +index+" element");
    console.log(item);
    console.log(a1);
    console.log(a2);
    if(a1==a2) {
        return item;
    }
    else {
        return undefined;
    }
})

console.log(evenarr);
console.log(perfectsqr);

let arr2=[1,2,3,4,5,6,7,8,9];
let factorial=arr2.reduce(function (accum,item,index,array) {
    console.log("For element "+index+" value is: "+item+" accum is "+accum);
    return accum*item;
})

let q=0;
let arr3=[0,1,2,3];
let fibonacci=arr3.reduce(function (accum,item,index,array) {
    if(index==1) {
        return q + accum;
    }
    return accum+item;
})
console.log(factorial);
console.log(fibonacci);
/*******************************************************************************************************************************/
//Using Split and Join
let string="Hello World";
let words=string.split(' ');
console.log(words);
let charr=string.split('');
console.log(charr);
let arr5=['a','b','c'];
console.log(arr.join(''));
let str1="abcdef";
let d=str1.split('')[str1.length-2];
console.log(d);
let date="2017-01-28"
console.log((date.split('-')).join('/'));













