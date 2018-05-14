//Next Tick Function.........................................................................
/*
process.nextTick(()=>{                              //Next Tick function works only when event loop gets freed.
    console.log("this is next tick function")
});
console.log('yo');
*/

process.nextTick(()=>{
    console.log("this is understanding the working of next tick function")
    process.nextTick(()=>{
        console.log("This is next of next tick function");
    });
});


process.nextTick(()=>{                              //This is pushed into event loop before inner next tick function.
    console.log('New next Tick function');
});







