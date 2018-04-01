/************************************************************************************************************************************/
//Understanding NodeJs vs Browser
console.log("Hello world");
/*console.log(window);                  //Only for browser
console.log(document );                 //Only for browser
console.log(global);                    //Only for NodeJs
console.log(process);                   //Only for NodeJs
*/
/************************************************************************************************************************************/
//Command Line arguments of NodeJs.................................................................................
console.log("Command Line arguments of NodeJs.................................................................................");
var s=0;
process.argv.forEach(function(val,index) {                  //The process.argv is used to access the command line arguments.
    if (index >= 2)                                         //It returns an array which holds all the command line arguments.
    {                                                       //Actual arguments start from position 2 and are string in nature.

        s=s+(parseInt(val));

    }
});
console.log(process.argv[4]);
console.log(s);
//Converting String to number ........................................................................
let x='10';
//1.Using Unary + ....................................................................
console.log(typeof(+x));
//2.Using Parse int.............................................................................................
console.log(typeof(parseInt(x)));
//3.Using Number function/Constructor.......................................
console.log(typeof(Number(x)));
let q=Number(x);                                     //Here number is used as function.
console.log(Number(x));
console.log(typeof(q)===typeof(parseInt(x)));
//4.Boxed variable........................................................
let p= new Number(x);                                       //Here number is used as constructor.
console.log(typeof(p));
console.log(typeof(q)===typeof(p));
console.log(q==p);
p++;                                                //Until and unless an operation is performed on a boxed variable the typeof
console.log(p);                                     //a boxed variable remains an object.
console.log(typeof(q)===typeof(p));

/********************************************************************************************************************************************/
//New,return statements, function and constructor..................................
console.log("New,return statements, function and constructor..................................");
function myNumber(stringa)
{
    return parseInt(stringa);
}
function myNumber1(stringa)
{
    let a=[parseInt(stringa)];
    return a;
}
let a=myNumber("10");
let b=new myNumber("10");
let c=myNumber1("10");
let d=new myNumber1("10");
console.log(typeof(a));
console.log(a);
console.log(typeof(b));                  //Here as return statement gives a primitive value thus we have an object because of new statement.
console.log(b);                          //Thus new supersedes return statement.
console.log(typeof(c));
console.log(c);
console.log(typeof(d));              //Here as return statement gives a non-primitive value thus we have the return statement data
console.log(d);                     //rather than object because new statement can't supersede return.


