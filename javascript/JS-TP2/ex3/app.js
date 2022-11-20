const btn = document.getElementById("button");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  result.value = firstNumber.value + secondNumber.value;
});
