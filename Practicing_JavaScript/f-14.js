/******************************************************************************************************************************/
//Understanding IIFE.....................................................................................................
(function sayHello() {
    console.log("Hello");               //A named function is IIFE
})();
(function () {
    console.log("Hello World");               //An unnamed function is IIFE
})();
(function () {
    let a=10;
    let b=20;                           //IIFE(advantage)-"Doesn't pollute global scope by creating local scope"
    console.log(a+b);
})();
//console.log(a);     //Block scope variable thus can't be accessed

if(true)
{
    (function () {
     var c=10;                      //Thus creating block scope variables with var by introducing IIFE
    })();
 //   console.log(c);
}

// Normal doMath Function
function doMath(){
    console.log("3^4:"+Math.pow(3,4));
    console.log("4^3:"+Math.pow(4,3));
    console.log("root(2):"+Math.sqrt(2));
    console.log("sin(10):"+Math.sin(10));

}
doMath();
    //IIFE doMath function
(function (l,p,q,r){
    l("3^4:"+p(3,4));
    l("4^3:"+p(4,3));               //IIFE(adv)-Simplification/Minimization of function
    l("root(2):"+q(2));
    l("sin(10):"+r(10));

})(console.log,Math.pow,Math.sqrt,Math.sin);