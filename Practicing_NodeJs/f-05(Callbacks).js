//Calllbacks......................................................................................................................
function one(a,onecb)
{
    console.log(a);
    onecb(a+1,(c,threecb)=>{
        console.log(c);                             //In this callback methods we have definition and calls inside the function and
        threecb(c+1,(e)=>{                          //within the function call of one.
            console.log(e);
        });
    });
}
one(1,(b,twocb)=>{
    console.log(b);
    twocb(b+1,(d)=>{
        console.log(d);
        fourcb(d+1);
    });
});
