let a=10;
let b=20;
export const num=(a+b);                                         //Here num and fun are called named exports.
                                                                //Named exports need to be imported with the same name/.
export const fun=function () {console.log(`Hello World`);
}
//This is called as default exports.They need to be imported in such a way that the all default variables exported are provided with a name.
//We can not have more than default exports.
export default {
    p:20,
    q:35
}/*
export default {
    r:30,
    x:40
}*/