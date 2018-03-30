
/****************************************************************************************************************************/
//Returning Functions.....................................

function creategreeter (name) {
    function greeter() {
        console.log("hello "+name);
    }
    return greeter;
}
let worldgreeter=creategreeter('world');            //Here world greeter turns out to be a function
worldgreeter();
creategreeter("Vedaang")();         //Here we are calling returned function greeter
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
     //a=20;                                //Earlier before strict mode was imposed if a=20 was written then such variables were declared
}                                          //in gloabal scope as search for variable in previous scope leads to its declaration in gloabal function scope.
alpha.y=50;
console.log(alpha);
console.log(typeof (alpha));
/**********************************************************************************************************************************/
//Scopes revisited..............................................................................................
var v=10;
function beta()
{
    console.log(v);
    if (true) {
        var v = 30;                      //Let has a block scope and var function scope
        console.log(v);
    }
       return v;
}
console.log(v);                 // Here as v is not declared and strict mode is applicable we cannot use v
console.log(beta());


