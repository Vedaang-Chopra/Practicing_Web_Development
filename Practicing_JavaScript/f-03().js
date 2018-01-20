let arr=[1,3,5,6,7,9,0,43,65,76];
//console.log(arr.sort());                                  //Lexicographic sorting of array-Every data type is possible in array thus
// sort functions thinks of it as string
function hello() {
    console.log("Hello");
}
/****************************************************************************************************************************/
function sayhello(hellofn) {                            //This is an example of higher order functions
    hellofn();                                          //where an argument passed is run as a function
}
sayhello(hello);
/******************************************************************************************************************************/
let arr1=[11,33,40,90,50]
console.log(arr);
function numIncCompare(a,b) {
     console.log(a);
     console.log(b);                                                             //This here is insertion sort
     console.log((((a%10)-(b%10)))*10);
     console.log((((a/10)%10) -((b/10)%10)));
     console.log((((a%10)-(b%10))+ ((a/10)%10) -((b/10)%10)));
     return    (((a%10)-(b%10))*10)+ (((a/10)%10) -((b/10)%10)) ;                                             //This sorting is not language specific
}
console.log(arr1.sort(numIncCompare))