
console.log(" to Check is leap year or not");

//var year = prompt("Enter Year");
prompt("Enter year");

console.log("Entered year "+year);
b=year%4;
c=year%100;
d=year%400;

if(b==0 && c!= 0 || d!=0)
{
    console.log( +year +"This is Leap Year");
}
    else
{
    console.log(+year +"This is not A LeapYear");
}