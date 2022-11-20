const btn = document.getElementById("submitBtn");
const email = document.getElementById("email");
const phone = document.getElementById("phoneNumber");
const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
const phoneRegExp = /^0\d{9}$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailRegExp.test(email.value)) return alert("email est non valider");
  if (!phoneRegExp.test(phone.value)) return alert("phone est non valider");
  confirm("bien saisi");
});
