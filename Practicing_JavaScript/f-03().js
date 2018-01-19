let arr=[1,3,5,6,7,9,0,43,65,76];
console.log(arr.sort());                                  //Lexicographic sorting of array-Every data type is possible in array thus
// sort functions thinks of it as string
function hello() {
    console.log("Hello");
}
function sayhello(hellofn) {                            //This is an example of higher order functions
    hellofn();                                          //where an argument as function is passed
}
sayhello(hello());