//5 random 3 digit number
A=Math.floor(Math.random()*1000);
B=Math.floor(Math.random()*1000);
C=Math.floor(Math.random()*1000);
D=Math.floor(Math.random()*10)%2;
E=Math.floor(Math.random()*10)%2;
console.log (A,B,C,D,E);


if (A>B && A>C && A>D && A>E)
{
 console.log("Maximum Value" +A);
}

else if(B>A && B>C && B>D && B>E)
{
    console.log("Maximum Value" +B);
}

else if (C>A && C>B && C>D && C>E)
{
    console.log("Maximum value " +C);
}

else if(D>A && D>B && D>C && D>E)
{
    console.log("MAximum Value" +D);
}
else if(E>A && E>B && E>C && E>D)
{
    console.log ("Maximum value" +E);
}