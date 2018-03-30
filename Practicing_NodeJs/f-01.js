/************************************************************************************************************************************/
//Understanding NodeJs vs Browser
console.log("Hello world");
/*console.log(window);                  //Only for browser
console.log(document );                 //Only for browser
console.log(global);                    //Only for NodeJs
console.log(process);                   //Only for NodeJs
*/
/************************************************************************************************************************************/
//Command Line arguments of NodeJs
var s=0;
process.argv.forEach(function(val,index) {                  //The process.argv is used to access the command line arguments.
    if (index >= 2)                                         //It returns an array which holds all the command line arguments.
    {                                                       //Actual arguments start from position 2 and are string.

        s=s+(parseInt(val));

    }
});
console.log(process.argv[4]);
console.log(s);
//Converting String to number.....................
let x='10';
