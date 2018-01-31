class Animal{
    constructor(color){
        this.color=color;               //public
        let legs=4;
        this.getlegs=()=>{
            return legs;
        }
         legs=this.getlegs();
    }
    geteyes(){
        return 2;
    }
}
let a=new Animal("blur");
a.getlegs=()=>5;
console.log(a.geteyes());
a.geteyes=()=>1;
console.log(a.geteyes())
console.log(a.getlegs())