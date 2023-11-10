const darkLightModeButton = document.getElementById("dark-light-mode");
const body = document.body;
const root = document.documentElement;

darkLightModeButton.addEventListener("click", function() {
    darkLightModeButton.classList.toggle("light");

    root.classList.toggle("light-mode");
});