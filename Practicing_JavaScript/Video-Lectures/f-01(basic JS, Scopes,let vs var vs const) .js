 //Starting with JavaScript

 /*JavaScript can be run on the browser or using script tag of an html file or using node interpreter*/


 var Number=10;                                                 //Declaring a number variable
 var String="This is a String";                                 //Declaring a string
 var Bool=false;                                                //Declaring a boolean variable
 var Array=[1,2,3,4];                                           //Declaring an array
 var Object={p:10,q:"String",r:false,s:[1,2,3]}                 //Declaring an object
 console.log(Number);
 console.log(String);
 console.log(Bool);
 console.log(Array);
 console.log(Object);


 /*****************************************************************************************************************************/
 //Basics of JavaScript
function add(i,j) {
    return i+j;                                                 //Syntax for creating a function
}
console.log(add(1,2));                                          //Calling a function
console.log(add('a','b'));
/*******************************************************************************************************************************/

//Scopes, variables and var

 var u=10;                                                     //a is being able to be accessed inside function .
                                                                //acts as global variable
 function myFun() {
     var v=20;
     console.log(u);
     if(true)
     {
         var z='something';

     }
    console.log(z);                                                 //var has block scope available outside its block.
 }
    myFun();
 /*console.log(b)                                             //var doesn't has function scope outside its function definition
*/
 /********************************************************************************************************************************/
 // Const vs let vs var in ES6
 const a=10;                                                //Declares a variable a constant in nature.
/******************************/
 function myfun1() {
    var b = 20;                                                  //Declares a normal variable
    if (true) {
        var b = 30;
    }
    console.log(b);
}
myfun1();
 /******************************/
 /* let and var are similar except of the fact that variables declared using let have block scope only unlike*/
 function myfun2() {
     let m = 20;                                                  //Declares a normal variable
     if (true) {
         let m = 40;
         console.log(m);
     }
     console.log(m);
 }
 myfun2();

 /*****************************/
 function myfun3() {
     let n = 50;
     if (true) {
         //When a variable is not found ,the scope previous to  it is checked for the same name variable
         n++;
         console.log(n);
              }
     console.log(n);
 }
 myfun3();
 /*****************************/
 function myfun4() {
     let p = 70;
     if (true) {
         // When a variable is not found ,the scope previous to it is checked for the same name variable but
         // here due to redeclaration of a new, same name variable leads to a reference error

//         p++;
         let p=80;
         console.log(p);
     }
     console.log(p);
 }
 myfun4();