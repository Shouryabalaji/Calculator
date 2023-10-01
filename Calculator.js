var usernumber =[];
var usernumber2 = 0;
var usernumber3 = 0;
var no1 = 0;
var no2 = 0;
function print () {
document.getElementById("display").innerHTML = usernumber.join("");
}

function clear () {
  window.location.reload()    
}

function back () {
  usernumber.pop();
  document.getElementById("display").innerHTML = usernumber.join("")
}

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")
var btn0 = document.getElementById("btn0")
var display = document.getElementById("display")
var btnplus = document.getElementById("btnplus")
var btndiv = document.getElementById("btndiv")
var btnmulti = document.getElementById("btnmulti")
var btnminus = document.getElementById("btnminus")
var btnequal = document.getElementById("btnequal")
var alter ;
var result =  0; 

btnplus.onclick = function ()
{
  usernumber2 = usernumber.join("");
  no1 = parseInt(usernumber2);
  usernumber = [];
  ref = 'plus';
  print();
  
}

btnminus.onclick = function ()
{
  usernumber2 = usernumber.join("");
  no1 = parseInt(usernumber2);
  usernumber = [];
  ref = 'minus';
  print();
}

btndiv.onclick = function()
{
  usernumber2 = usernumber.join("");
  no1 = parseInt(usernumber2);
  usernumber = [];
  ref = 'div';
  print();
}

btnmulti.onclick = function()
{
  usernumber2 = usernumber.join("");
  no1 = parseInt(usernumber2);
  usernumber = [];
  ref = 'multi';
  print();
}

btnequal.onclick = function()
{
  if (ref == 'plus') {
  usernumber3 = usernumber.join("");
  no2 = parseInt(usernumber3);
  result = no1 + no2 ;
  display.innerHTML = result;
  }
  else if (ref == 'minus') {
    usernumber3 = usernumber.join("");
  no2 = parseInt(usernumber3);
  result =   no1 - no2 ;
  display.innerHTML = result;
  
} else if (ref == 'multi') {
    usernumber3 = usernumber.join("");
  no2 = parseInt(usernumber3);
  result =  no1 * no2 ;
  display.innerHTML = result;
  
} else {
  usernumber3 = usernumber.join("");
  no2 = parseInt(usernumber3);
  result = no1 / no2 ;
  display.innerHTML = result;
  }
}

btn1.onclick= function () {
  usernumber.push(1);
  print();
}

btn2.onclick= function () {
  usernumber.push(2);
  print();
}

btn3.onclick= function () {
  usernumber.push(3);
  print();
}
btn4.onclick= function () {
  usernumber.push(4);
  print();
}
btn5.onclick= function () {
  usernumber.push(5);
  print();
}
btn6.onclick= function () {
  usernumber.push(6);
  print();
}
btn7.onclick= function () {
  usernumber.push(7);
  print();
}
btn8.onclick= function () {
  usernumber.push(8);
  print();
}
btn9.onclick= function () {
  usernumber.push(9);
  print();
}
btn0.onclick= function () {
  usernumber.push(0);
  print();
}
document.getElementById("btn.").onclick= function () {
  usernumber.push('.');
  print();
}
document.getElementById("btnC").onclick= function () {
  clear();
}
document.getElementById("btnBACK").onclick= function () {
  back();
}
windows.alert = ('u are such a sussy baka');

