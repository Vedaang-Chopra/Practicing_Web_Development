String.prototype.somefun=function () {
    console.log("OMG,changing Strings");
    console.log(this);
}
let str="dasadcnadnns";
str.somefun();
let arr=[1,3,"ASD0",{a:10}];
Array.prototype.filternums1=function () {
    arr = arr.filter(function (item, index, array) {
        return item * 1 == item;
    });
    console.log(arr);
}
Array.prototype.filternums2=function () {
              return this.filter( i=>typeof i=='number');
                 console.log(arr);
}

//arr.filternums1();
arr.filternums2();
/************************************************************************************************************************/
//Arrow Functions...........................................................
let sum=function (a,b) {
    return a+b;
}
let differ= (a,b)=>a-b;
let multi=(a,b)=> {a * b;}