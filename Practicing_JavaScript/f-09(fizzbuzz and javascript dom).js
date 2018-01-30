function fizzbuzzchallenge(){
    let ul=document.getElementById("fizzbuzz");
    let d;

    for(var i=0;i<1000;i++)
    {
        d=document.createElement('li');
        ul.appendChild(d);
        d.innerHTML=i;
        if(i%3==0 && i%5==0 )
        {
            d.innerHTML="FizzBuzz";
        }
        else if(i%5==0)
        {
            d.innerHTML="Buzz";
        }
        else if(i%3==0 )
        {
            d.innerHTML="Fizz";
        }

    }


}
//This is dom practice
fizzbuzzchallenge();
console.log("dbmcsdmhdmsbdckbds")
