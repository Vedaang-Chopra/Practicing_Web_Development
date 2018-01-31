/******************************************************************************************************************************/
//Understanding Scopes and closures..................................................................
for(var i=0;i<5;i++)
{
    setTimeout(function () {
        console.log(i);                                 //Here  var has created in global scope.
    },1000)                                             //Value of i retains.
}
for(let i=0;i<5;i++)
{
    setTimeout(function () {
        console.log(i);                                 //Here let has created in block scope.
    },1000)                                             //Here a new is created every time.
}
for(var i=0;i<5;i++)
{
    setTimeout(function () {                        //Here instant creation as
        console.log(i);
    },1000*i);
}







/********************************************************************************************************************************/
//Understanding Threading ,Synchronous and Asynchronous Process
console.log("yo");
console.log(new Date().getTime())
setTimeout(function () {
    console.log(new Date().getTime())
    console.log("Hello");                           //Here Set Timeout Adds a delay of 1 sec in printing Hello
},1000);
console.log("World");
console.log("Wassup");
//Note:-console.log() takes less than 1 sec to print data.s
/****************************************************************/
console.log("yo");
console.log(new Date().getTime())
setTimeout(function () {
    console.log(new Date().getTime())               //Here Set Timeout Adds a delay of 0 sec in printing Hello yet there
    console.log("Hello");                           //exists some time difference as
},0);
console.log("World");
console.log("Wassup");
