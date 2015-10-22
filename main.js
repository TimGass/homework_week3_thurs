var num1, num2;

function sum(num1, num2){
  return (num1 + num2);
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calculateBtn").addEventListener("click", function(event){
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
