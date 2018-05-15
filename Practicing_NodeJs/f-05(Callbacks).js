//Calllbacks......................................................................................................................
function one(a,onecb)
{
    console.log(a);
    onecb(a+1,function(c,threecb)
    {
        console.log(c);
        threecb(c+1,(e)=>
        {
            console.log(e);
            console.log(a);
            console.log(c);
        })

    })
}
one(1,function (b,twocb){
    console.log(b);
    twocb(b+1,function (d,fourcb){
        console.log(d);
        fourcb(d+1);
    })

});
//Callback (example-2)...........................................................
//This is an example of a series of callback function where asynchronous process is done sequentualy
function downloadfile(url,downloaded){
    setTimeout(()=>{
        downloaded(null,"DATA DOWNLOADED");
        console.log("download function")
},2000);
}
function encrypt(data,encrypted)
{
    setTimeout(()=>{
        encrypted(null,`{{{{{{{${data}}}}}}}}}`);
        console.log("encryption function")
    },1000);
}
function savedfile(data,saved)
{
    setTimeout(()=>{
        saved(null,true)
        console.log("Saving Function")
    },2000);
}
downloadfile("https://cb.lk/file.jpg",(err,data)=>{
    if(!err){
        encrypt(data,(err2,encData)=>{
            if(!err2)
            {
                savedfile(encData,(err3,saved)=>{
                    if(!err3 && saved)
                    {
                        console.log("download,encrypted and saved")
                    }
                })
            }
        })
    }
})
