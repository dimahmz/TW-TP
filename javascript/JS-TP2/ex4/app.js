const civilite = document.querySelectorAll("input[name='sex']");
const nomPrenom = document.getElementById("nomPrenom");
const adresse = document.getElementById("adresse");
const postalNumber = document.getElementById("postalNum");
const localite = document.getElementById("localite");
const pays = document.getElementById("Pays");
const platforms = document.querySelectorAll(".platform");
const applications = document.getElementById("apps");

const SubmitBtn = document.getElementById("submitForm");

const paraMessage = document.getElementById("messagePar");

SubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let title = "";
  for (let checkbox of civilite)
    if (checkbox.checked) {
      title = checkbox.value;
      break;
    }
  if (!nomPrenom.value.length) return alert("le nom doit etre saisi");
  if (!adresse.value.length) return alert("l'adresse doit etre saisi");
  if (!localite.value.length) return alert("localité doit etre saisi");

  let selectedPlatforms = "";
  platforms.forEach((platform) => {
    if (platform.checked) selectedPlatforms += platform.value + " ";
  });

  if (!selectedPlatforms) return alert("selectioner au moins une platforme ");

  let selectedApps = "";
  for (let i = 0; i < applications.options.length; i++) {
    if (applications.options[i].selected)
      selectedApps += applications.options[i].value + " ";
  }
  if (!selectedApps) return alert("selectioner au moins une application ");

  let message = `Bonjour ${title} ${nomPrenom.value} vous habillez à ${adresse.value} ${postalNumber.value}/ ${localite.value}et ${pays.value}.
  Vos plateformes sont ${selectedPlatforms} et vos applications sont ${selectedApps}`;

  paraMessage.innerHTML = message;
});
