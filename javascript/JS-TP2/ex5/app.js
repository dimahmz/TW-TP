const operationBtns = document.querySelectorAll(".operation");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

operationBtns.forEach((btn) => {
  btn.addEventListener("click", calculer);
});

function calculer(event) {
  event.preventDefault();

  if (!(firstNumber.value && secondNumber.value)) {
    return alert("les deux champs doivent être rempli");
  }

  const operation = event.target.innerHTML;

  switch (operation) {
    case "+":
      result.value = +firstNumber.value + +secondNumber.value;
      break;
    case "-":
      result.value = +firstNumber.value - +secondNumber.value;
      break;
    case "*":
      result.value = +firstNumber.value * +secondNumber.value;
      break;
    case "/":
      if (secondNumber.value)
        result.value = +firstNumber.value / +secondNumber.value;
      else alert("impossible de diviser sur 0!");
      break;
  }
}

// +num is equivalent to parseInt(num) but I prefer using it because it's cleaner
