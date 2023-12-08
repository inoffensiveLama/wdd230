const today = new Date();
let dayOfWeek = today.getDay();
const banner = document.querySelector("#chamber-banner");

const closeButton = document.querySelector("#close-banner");
closeButton.addEventListener('click', () => {
    banner.style.display = "none";
});

if (dayOfWeek >= 1 && dayOfWeek <= 3) {

    const banner = document.querySelector("#chamber-banner");
    banner.style.display = "flex";

    
}