function one(a,onecb)
{
    console.log(a);
    onecb(a+1,(c,threecb)=>{
        console.log(c);
        threecb(c+1,(e)=>{
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
