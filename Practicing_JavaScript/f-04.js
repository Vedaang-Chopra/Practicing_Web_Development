
/****************************************************************************************************************************/
//Returning Functions.....................................

function creategreeter (name) {
    function greeter() {
        console.log("hello "+name);
    }
    return greeter;
}
let worldgreeter=creategreeter('world');            //Here worldgreeter turns out to be a function
worldgreeter;
function fakesum(a,b) {
   function sum()
    {
        console.log(a+b);
    }
    return sum;
}
var a=fakesum(3,4);
console.log(a);
/********************************************************************************************************************************/
//Functions as objects......................................................................................
let obj={p:1,q:2,r:3};
obj.x=40;
console.log(obj);
function alpha()
{

}
alpha.y=50;
console.log(alpha);
console.log(typeof (alpha));
/**********************************************************************************************************************************/
//Scopes and Closures..............................................................................................
//let v=10;
function beta()
{
    v=20;
    return v;
}
console.log(v);                 // Here as v is not declared and strict mode is applicable we cannot use v
console.log(beta());


