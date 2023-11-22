const password1 = document.querySelector("#password");
const password2 = document.querySelector("#repeatPassword");
const message = document.querySelector("#passwordMessage");

password2.addEventListener("focusout", checkSame);

function checkSame() {
	if (password1.value !== password2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
		password2.focus();
	} else {
		message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}
