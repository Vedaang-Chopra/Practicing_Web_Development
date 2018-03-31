function sum(numarray){                     //Here a reference array is created only.
    "use strict";
    return numarray.reduce((accum,item)=>accum+item);
}
let sum1=sum([3]);
let sum2=sum([2,3]);
let sum3=sum([2,3,4]);
console.log(sum1);
console.log(sum2);
console.log(sum3);
//Resting.......................................................
function sumA(...numarray1) {                             //Convert it to array :-(Reason)as sum could take any no. of arguments thus
    return numarray1.reduce((accum,item)=>accum+item)    //if it was an array then the no. of elements and the element data would
                                                           //be easily accessible.
}

let sum4=sumA(5);
let sum5=sumA(6,7);             //Here any number of arguments can be sent to the function.Plus it's a little faster.
let sum6=sumA(4,5,1);
console.log(sum4);
console.log(sum5);
console.log(sum6);
/****************************************************************************************************************************/
//Spreading............................................
disc=(a,b,c) => {(b*b-4*a*c);}                  //Arrow function

let coeff=[3,4,1];
console.log(disc(...coeff));

