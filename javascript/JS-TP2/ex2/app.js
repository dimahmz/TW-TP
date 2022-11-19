const form = document.getElementById("form");
const nom = document.getElementById("nom");
const password = document.getElementById("password");
const sexe = document.querySelectorAll('input[name="sexe"]');

form.addEventListener("submit", afficherUnMessage);

function afficherUnMessage(event) {
  event.preventDefault();
  let title = "";
  if (!nom.value.length) {
    return alert("vous devez saisir le nom!");
  }

  for (const checkbox of sexe)
    if (checkbox.checked) {
      title = checkbox.value;
      break;
    }
  password.value === "SRC2"
    ? alert(`bonjour ${title} ${nom.value}`)
    : alert(`désolé ${title} ${nom.value}`);

  password.value = "";
}
