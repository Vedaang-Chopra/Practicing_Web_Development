/**********************************************************************************************************************************/
//Using this and new....................................................................................................
console.log("Using this .........................................................")
function alpha()
{
    this.b=11;
}
alpha();
console.log(b);
let obj={
    p:10,q:20,
    r:function(){
        console.log(this);               //Here this points to the object "obj" as r is defined here.
        alpha();                        //Even though alpha is called her yet b created in alpha would not point to b,
    }                                   //it would point towards global only as alpha is defined in global. This is called
}                                       // as lexical scoping, that is where there is definition this would point there only.
console.log(b);
let x=obj.r;
x();                //Here x is defined in global. Thus here this refers to script/global
console.log(obj);
obj.r();
let obj2={
    a:10,
    b:20,
    c:x             //Here as c is defined/created here that is thus "this" would point to obj2;
}
obj2.c();
//Using new constructor...........................................................................
function newPerson(name,age)
{
    this.name=name;
    this.age=age;

}
let p=new newPerson("Joe",32);
console.log(p);
//Implementing classes before intoduction of EcmaScript6...............................................................
function vehicle(color,seats)
{
    this.color=color;
    this.seats=seats;
    this.canAccomadate=function (people) {
        return people<=seats;
    }
    let wheels=2;
    this.getwheels=function(){
        return wheels;
    }
    this.setwheels=function (wh) {
        wheels=wh;
    }
}
let bike=new vehicle('black',2)
let car=new vehicle('red',4);
console.log((bike.canAccomadate(1)));
console.log((car.canAccomadate(4)));
car.setwheels(4);
console.log(car.getwheels());