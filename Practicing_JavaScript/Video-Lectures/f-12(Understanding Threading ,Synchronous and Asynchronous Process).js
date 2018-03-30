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
