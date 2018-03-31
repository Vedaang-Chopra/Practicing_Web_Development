let b=10;
function scope()
{
    let a=20;
    setTimeout(function () {
        console.log(a);
    },1000);
}
console.log(b);
scope();