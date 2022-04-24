Console.log("Unit Conversion");
Console.log(" enter 1 for Feet to Inch");
Console.log(" enter 2 for Inch to Feet");
Console.log(" enter 3 for Feet to Meter");
Console.log(" enter 4 for Meter to Feet");


let number = prompt("Enter the Number");

switch(number)
{
    case 1:
    let Feet= prompt("Enter the value of Feet");
    Inch=Feet*12;
    Console.log( "Value in Inch"+Inch);
    break;
    case 2:
    let Inch=prompt("Enter the value of Inch");
    Feet=Inch/12;
    Console.log("value in Feet" +Feet);
    break;
    case 3:
    let feet=prompt("Enter the value of Feet");
    Meter=Feet/3.28;
    Console.log("value in Meter" +Meter);
    break;
    case 4:
     let Meter=prompt("Enter the value of Meter");
     Feet=Meter*3.28;
     Console.log("value in feet" +Feet);
     default:
         Console.log("Enter a valid number");
}