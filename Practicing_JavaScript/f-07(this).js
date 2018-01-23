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


console.log(obj);
obj.r();
//Using new constructor...........................................................................
function newPerson(name,age)
{
    this.name=name;
    this.age=age;

}
let p=new newPerson("Joe",32);
console.log(p);