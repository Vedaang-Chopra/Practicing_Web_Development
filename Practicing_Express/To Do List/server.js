const express=require('express');
const path=require('path');
const app=express();
let todos=[];
app.get('/',(req,res)=>{
    res.send
    ("<h1>" +
        "<center>" +
        "Welcome to TO DO LIST " +
        "</center>" +
        "</h1>"
    );
function emptycheck(arr) {
    let arrcheck = arr.map(function (item) {
        if (!item)
            return 0;
        else
            return 1;
    });
    return arrcheck;
}
let arrcheck=emptycheck(todos);
    res.redirect(path.join(__dirname,'public_static_html','index.html'));
//setTimeout(()=>{
    arrcheck.forEach(function (item) {
        if (item == 1)
            res.sendFile(path.join(__dirname,'public_static_html','showtodos.html'));
        else
            res.sendFile(path.join(__dirname,'public_static_html','index.html'));
    })
//},2000)
});
/*express.static("Directory Path")-This function takes a parameter to the directory where the public (available to all)
and static(non changing) frontend content is available and needs to be shown to end user.Generally such directories are
called as (named as) public_static_html.The first file to be accessed within this public_static_html folder is index.html .This is a convention.
*/
app.use('/todos', express.static(path.join(__dirname+'public_static_html')));
app.get('/addtodos',(req,res)=>{
    todos.push(req.query.newtodo);
    res.sendFile(path.join(__dirname,'public_static_html','showtodos.html'));
})
app.get('/showtodos',(req,res)=>{
    res.send("<ul>");
    todos.forEach(function (item) {
                     res.send("<li>" +
                         "item" +
                         "</li>");
        })
        res.send("</ul>");

});



app.listen('6776',()=>{
console.info("Started server at localhost::6776");
});