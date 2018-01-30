class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.greet=function () {
            return `Hello ${this.name}`;
        }
    }
    getFirstName(){
        return this.name.split(' ')[0];
    }
    get lastname(){
        return this.name.split('')
    }
}
let p=new Person("Jose Mourinho",56);
console.log(p);
console.log(p.name);
console.log(p.getFirstName());