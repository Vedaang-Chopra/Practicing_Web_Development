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
Promise.all([downloadfile('1'),downloadfile('2'),downloadfile('3')]).then(function (results){
        console.log(results);
        let encryptarr=Promise.all(results.map(item =>encryptdata(item)));
        return encryptarr;
        }).then(function (encryptdata){
        console.log(encryptdata);
        return Promise.all(encryptdata.map(item=> saveddata(item)));
        }).then(function (saveddata) {
        console.log(saveddata)
}).catch(function (data) {
    console.error(data);
});
function sum(a,b){
return a+b;
}
console.log(sum(1,5));
console.log(sum(2,5));
setTimeout(function () {
    console.log(sum(3,5));
    console.log(sum(4,5));

},3000);
console.log(sum(5,5));
console.log(sum(6,5));
console.log(sum(7,5));
console.log(sum(8,5));