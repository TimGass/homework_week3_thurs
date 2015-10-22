var num1, num2;

function sum(num1, num2){
  return (num1 + num2);
};

function difference(num1, num2){
  return (num1 - num2);
};

function product(num1, num2){
  return (num1 * num2);
};

function quotient(num1, num2){
  return (num1 / num2);
};

function eval(){
  if (!isNaN(document.getElementById("num_one").value)) {
    num1 = Number(document.getElementById("num_one").value);
}
 else {
   alert("I can only calculate numbers!");
 }

  if (!isNaN(document.getElementById("num_two").value)) {
    num2 = Number(document.getElementById("num_two").value);
}
else {
  alert("I can only calculate numbers!");
}
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("add").addEventListener("click", function(){
    eval();
    document.getElementById('answer').innerHTML = sum(num1, num2).toString();
  });

  document.getElementById("subtract").addEventListener("click", function(){
    eval();
    document.getElementById('answer').innerHTML = difference(num1, num2).toString();
  });

  document.getElementById("multiply").addEventListener("click", function(){
    eval();
    document.getElementById('answer').innerHTML = product(num1, num2).toString();
  });

  document.getElementById("divide").addEventListener("click", function(){
    eval();
    document.getElementById('answer').innerHTML = quotient(num1, num2).toString();
  });
});
