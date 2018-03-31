/**********************************************************************************************************************************/
//Creating classes using function and objects..........................................................................
//Using functions..........................................................
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
delete p1.name;             //This occurs as p1 has no relationship after once it is been created.
console.log(p1);
//Using Objects......................................................
//Prototype inheritance.......................
console.log("Starting Prototype inheritance................................")
let a={p:10};
let b=Object.create(a);
console.log(a);
console.log(b);
console.log(b.p);
console.log(b.p++)
b.q=20;
console.log(b);
let c=Object.create(b);
console.log(b);
console.log(c);
console.log(c.p);
console.log(c.q);
c.r=30
c.p++;
c.q++;
console.log(c);
console.log(c.p);
console.log(c.q);
console.log(c.r);
console.log(b.__proto__);
console.log(c.__proto__);
console.log(c.__proto__.__proto__);
console.log(c.__proto__.__proto__.__proto__);
console.log(c.__proto__.__proto__.__proto__.__proto__);
console.log(b.__proto__.p);
console.log(c.__proto__.q);
console.log(c.__proto__.p);
console.log(c.__proto__.__proto__.p)
/**********************************************************************************************************************************/
//Using this and new....................................................................................................
console.log("Using this .........................................................")
console.log(this);
this.a=0;
console.log(this);
function alpha()
 {
     //console.log(this);
     this.b=11;                     //Here b is created in global scope as this points to global.
 }

//console.log(this);
 function beta() {
     //console.log(this);
    this.c=22;
 }
alpha();
console.log(this);
console.log(process.env.TEMP);


