Console.log(" To Check Number is Palindrome or Not");
//Console.log("Enter a Number);
//let Number = prompt("Enter a Number");
let Number=1234;

function reverseNumber(Number)
{
    let rev_number=0;
    let a=0;
    let b=0;
    while(Number>0)
    {

        a=Math.floor(Number*10);
        b=Math.floor(Number%10);
        rev_number=Math.floor(a+b);
        Number=Math.floor(num/10);
    }
    return rev_number;
}

//Console.log("Reverse Number" +rev_number);

function isPalindrome(Number)
{
    if(rev_number==Number)
    return true;
    else
    return false;
}