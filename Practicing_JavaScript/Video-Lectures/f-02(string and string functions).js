let mystr="This is some text";
//Note:-As Strings are immutable in nature thus mystr remains constant until and unless its value is changed
mystr.charAt(0);                    //Finds character at ith position
mystr.toUpperCase();                //Returns the string in upper case
mystr.toLowerCase() ;                //Returns the string in lower case
//Example to change string value
mystr=mystr.toUpperCase();
console.log(mystr);
console.log(mystr.replace('E','X'));              //Changes only the first instance of the letter occurring multiple times
console.log(mystr.replace('T','K').replace('T','K'));

console.log(mystr.split(' '));                                  //Used to split the string
mystr.indexOf('w');
//If character is not present then it returns -1;
//Always returns first instance of found character
mystr.indexOf(' ',5);       //Starts looking for space after position 5

/**********************************************************************************************************************/

