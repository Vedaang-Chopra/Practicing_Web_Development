// var promise1 = new Promise(function(resolve, reject) {
//     data=100;                                          //Syntax for creating a promise
//     if(data==100)                                      //Resolve and reject are two arguments(function)rA
//         resolve(data);                           //Resolve-This resolve statement is used so that any data(parameter) if needs
//     else                                         //to be passed to the resolve function definition we can pass it.
//         reject(data);                            //Reject-This reject statement is used so that any data(parameter) if needs
//                                                  //to be passed to the reject function definition we can pass it.
//     setTimeout(()=>{
//         console.log("Entering Timeout function");
//     },2000);
//     console.log("First This function will be executed");
// });
// promise1.then(function(data)                         //The then function works on a promise object so as to call a resolve function.
// {                                                    //The resolve function definition needs to be provided here. It is not compulsory to call.
//     console.log("This is resolved data");
//     console.log(data)
//
// }).catch(function(data)                              //The catch function works on a promise object so as to call a reject function.
// {                                                    //The reject function definition needs to be provided here. It is not compulsory to call.
//     console.log("This is rejected data");             //As the operation can be successfull or unsuccessfull thus both can be chained.
//     console.log(data)
//
// });
/************************************************************************************************************************************/
//Promise with multiple elements send on resolve
function downloadFile(url,method,imp){
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            //resolve('downloaded-data');
        },3000);
        if(!url)
            reject(new Error("No URL"));                //Throwing error/Catch Handler Mechanism
        else
            resolve([method,url,imp]);          //Resolve function sends an array of parameters not multiple parameters.
    });
}
downloadFile("https://cb.lk/file1.jpg",'GET',"Hello").then(function([data,data1,data2]) {
    console.log(data);
    console.log(data1);
    console.log(data2);
});
downloadFile().catch(function (data)
{
    console.error('There is no data:'+data);
});
//Promisification....................................................................................
function downloadfile(url,downloaded){
    setTimeout(()=>{
        downloaded(null,"DATA DOWNLOADED");
        console.log("download function")
    },2000);
}
function downloadfilepromise(url)                               //Here the download function is promisified by creating its promise function
{
    return new Promise(function (resolve,reject) {
        downloadfile(url,function (err,data) {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}
function encrypt(data,encrypted)
{
    setTimeout(()=>{
        encrypted(null,`{{{{{{{${data}}}}}}}}}`);
        console.log("encryption function");
    },1000);
}
function encryptpromise(url)
{
    return new Promise(function (resolve,reject) {
        encrypt(url,function (err,data) {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

downloadfilepromise("https://google.com").then(function (data) {
    encryptpromise(data);
})