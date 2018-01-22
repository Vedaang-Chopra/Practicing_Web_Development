
/****************************************************************************************************************************/
//Returning Functions.....................................

function creategreeter (name) {
    function greeter() {
        console.log("hello "+name);
    }
    return greeter;
}
let worldgreeter=creategreeter('world');
worldgreeter;
function fakesum(a,b) {
    {
        console.log(a+b);
    }
    return sum;
}
var a=fakesum(3,4);
console.log(a);