function Person(name,age) {
    this.name = name;
    this.age = age;
    this.greet=function () {
        return `Hello ${this.name}`
    }
    Person.prototype.getFirstName = function () {           //Creating a function like this doesn't add the function in the
        return this.name.split(' ')[0];                     //Class definition but adds it to the public part of class
    }
    this.getlastname=function () {                          //Creating a function like this adds it to the object definition
        return this.name.split(' ')[1];
    }

}

let p=new Person("Jose Mourinho",56);
console.log(p);
console.log(p.getFirstName());
console.log(p.getlastname());
