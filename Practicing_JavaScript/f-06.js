/**********************************************************************************************************************************/
//Creating classes using function and objects..........................................................................
"use strict";
function createPerson(name,age)
{
    return{
        name:name,                      //Here a single entity ,an object is being returned.
        age:age,
        isAdult: function()
        {
            return (age>18)
        }
    }

}
let p1=createPerson("Joe",32)           //Here a fake class or an(object) leads to creation of  another object
console.log(p1.isAdult());
//Here p1 is an object of javascript.Thus new data can be added or deleted without change in class
delete p1.name;
console.log(p1);