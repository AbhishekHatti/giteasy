function Calc(clicked_id)
{
var val1 = parseFloat(document.getElementById("Number1").value);
var val2 = parseFloat(document.getElementById("Number2").value);
if(isNaN(val1)||isNaN(val2))
alert("ENTER VALID NUMBER");
else if(clicked_id=="Add")
document.getElementById("Result").value=val1+val2;
else if(clicked_id=="Sub")
document.getElementById("Result").value=val1-val2;
else if(clicked_id=="Mul")
document.getElementById("Result").value=val1*val2;
else if(clicked_id=="Div")
document.getElementById("Result").value=val1/val2;
}

function Clr()
{
Number1.value="";
Number2.value="";
Result.value="";
}