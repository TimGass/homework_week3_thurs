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

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("add").addEventListener("click", function(){
       if (!isNaN(document.getElementById("num_one").value)) {
         num1 = Number(document.getElementById("num_one").value);
     }
      else {
        alert("we can only add numbers!");
      }

       if (!isNaN(document.getElementById("num_two").value)) {
         num2 = Number(document.getElementById("num_two").value);
     }
     else {
       alert("we can only add numbers!");
     }

    document.getElementById('answer').innerHTML = sum(num1, num2).toString();
  });

});
