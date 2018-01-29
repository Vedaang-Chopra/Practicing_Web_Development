
function fizzbuzz(){
    "use strict";
    let c=document.getElementById("fizzbuzz")
    for(var i=1;i<=1000;i++)
    {
        let d = document.createElement(li);
        c.appendChild(d);
        d.setIdAttribute("item")
        if(i%3==0)
        {
            document.getElementById("item").innerHTML="fizz";
        }
        if(i%5==0)
        {
            document.getElementById("item").innerHTML="buzz";
        }
        if(i%15==0)
        {
            document.getElementById("item").innerHTML="fizzbuzz";
        }
        document.getElementById("item").innerHTML=i;
    }

}