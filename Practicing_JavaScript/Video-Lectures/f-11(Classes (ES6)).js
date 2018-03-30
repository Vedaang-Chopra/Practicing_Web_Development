class Person{
    constructor(name,age){
        this._name=name;
        this.nick=name.split(" ")[0].toLowerCase();
        this.age=age;
        this.greet=function () {                    //Function in object
            return `Hello ${this._name}`;
        }
    }
    getFirstName(){                             //Function in class
        return this._name.split(' ')[0];
    }
    get lastname(){
        return this._name.split(' ')[1];
    }
    get name(){
        return this._name;
    }
    set name(val){
        this._name=val;
        this.nick=val.split(" ")[0].toLowerCase();
    }
}
let p=new Person("Jose Mourinho",56);
console.log(p);
console.log(p.name);
console.log(p.getFirstName());
console.log(p.lastname);
console.log(p._name);
p.name="vedaang chopra";
console.log(p._name);
console.log(p.nick);
console.log(p.greet())