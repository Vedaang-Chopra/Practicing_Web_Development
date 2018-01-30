function fizzbuzzchallenge(){
    let ul=document.getElementById("fizzbuzz");
    let d,g;
    let e=(new Date().getTime());
    for(var i=0;i<1000;i++)
    {
        d=document.createElement('li');
        ul.appendChild(d);
        g=""+i;
        if(i%3==0 && i%5==0 )
        {
            g="FizzBuzz";
        }
        else if(i%5==0)
        {
            g="Buzz";
        }
        else if(i%3==0 )
        {
            g="Fizz";
        }
        d.innerHTML=g;
    }
    let f=new Date().getTime();
    console.log(e);
    console.log(f);
    console.log(f-e);

}
//This is dom practice


