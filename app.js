var result;

function calculate() {
var number1=document.getElementById("number1").value;
var number2=document.getElementById("number2").value;
var operation=document.getElementById("operation").value;

var n1 = Number(number1);
var n2 = Number(number2);

if(operation == 'add')
result = n1 + n2;
else if(operation == 'substract')
result = n1 - n2;
else if(operation == 'multiply')
result = n1 * n2;
else if (operation=='divide') {
    if(n2==0) 
    alert("The denominator cannot be 0.Try again.");
    else
    result=n1/n2;
}
else 
result=Math.pow(n1,n2);


document.getElementById("result").innerHTML = "Result : " + result;
}

var calculateBtn=document.getElementById("buton");
calculateBtn.onclick=calculate;