/******************************************************************************************************************************/
//Understanding Scopes and closures on Asynchronous processes..................................................................
/*
for(var i=0;i<5;i++)
{
    setTimeout(function () {
        console.log(i);                                 //Here  var has created in global scope.
    },1000)                                             //Value of i retains.
}
//Output-After 1 sec ; i=5 printed 5 times
*//*
for(let i=0;i<5;i++)
{
    setTimeout(function () {
        console.log(i);                                 //Here let has i created in block scope.
    },1000)                                             //Here a new is created every time.
}
//Output-After one second i=0,1,2,3,4 is printed
*//*
for(var i=0;i<5;i++)
{
    setTimeout(function () {                        //Here i=5 is set rapidly but creation is time consuming
        console.log(i);                             //as for each i value of time 1000*i is different
    },1000*i);
}
//Output-Here i=5 is printed five times with each i having delay
*//*
for(let i=0;i<5;i++)
{
    setTimeout(function () {                        //Here i=0,1,2,3,4 is printed beacuse of let new i is being created
        console.log(i);                             //as for time it is increasing for every i due to 1000*i
    },1000*i);
}
//Output-Here i=0,1,2,3,4 is printed with each i print having delay
*/
for(var i=0;i<5;i++)
{
    //(i=>setTimeout(()=>console.log(i),1000*i))(i);
    (function(i) {                                      //This is an IIFE expression
        setTimeout(function ()
        {
            console.log(i);
        },1000 *i);
    })(i);
}
//Output-Here is same as previous before due to introduction of i in IIFE expression have let scope.