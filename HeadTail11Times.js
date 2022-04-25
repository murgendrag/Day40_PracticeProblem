

//console.log(n);
let FlipCoin=1;
while(FlipCoin<12)
{
    let n= Math.floor(Math.random()*10)%2;
    if(n==1)
    {
        console.log("Head");
    }
    else
    {
        console.log("Tail");
    }
    FlipCoin++;
}
