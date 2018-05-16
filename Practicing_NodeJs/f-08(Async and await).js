function downloadfile(url){
    return new Promise(function (resolve,reject) {
        if(!url)
            reject(new Error("NO URL PROVIDED"));
        else {
            setTimeout(function (data=url) {
                resolve("Data Downloaded from url :" + data);
            }, 3000);

        }
    })
}
function encryptdata(url){
    return new Promise(function (resolve,reject) {
        if(!url)
            reject(new Error("NO URL PROVIDED"));
        else
        {
            setTimeout(function (data=url) {
                resolve("Downloaded data encryption :" + `{{{{{{{{{{{{{${data}}}}}}}}}}}}}}}}}}}}}}}}}`);
            }, 1000);

        }
    })
}
function saveddata(url) {
    return new Promise(function (resolve, reject) {
        if (!url)
            reject(new Error("NO URL PROVIDED"));
        else {
            setTimeout(function (data=url) {
                resolve("Saving encrypted data :{" + data+" }");
            }, 2000);
        }
    });
}
async function getFile() {                                      //This is as any async function.
    try {
        let dldata = await downloadfile("1");
        console.log(dldata);
        let encdata = await encryptdata(dldata);
        console.log(encdata)
        let savdata = await  saveddata(encdata);
        console.log(savdata);
    } catch (exception)
    {
        console.error(exception);           //Catch/Reject Methods can be handled by this method only.
    }
}
getFile();
console.log("Checking async and await.........................");