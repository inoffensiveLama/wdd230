const membersURL = "https://inoffensivelama.github.io/wdd230/chamber/data/members.json";

const spotlight1 = document.querySelector("#spotlight-card-1");
const spotlight2 = document.querySelector("#spotlight-card-2");
const spotlight3 = document.querySelector("#spotlight-card-3");

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displaySpotlights(data.members);
}

const displaySpotlights = (members) =>{
    let random1;

    do {
        random1 = Math.floor(Math.random() * members.length);
    }
    while (members[random1].membership_level !== "Gold" | members[random1].membership_level !== "Platinum"); 

    let compName1 = document.createElement("h2");
    compName1.textContent = members[random1].name;

    let iconElement1 = document.createElement("img");
    iconElement1.setAttribute("src", (`images/${members[random1].image}`));
    iconElement1.setAttribute("alt", members[random1].name);
    iconElement1.setAttribute("width", "100px");

    iconElement1.style.padding = "10px";


    spotlight1.setAttribute("class", "spotlight-card");

    spotlight1.appendChild(compName1);
    spotlight1.appendChild(iconElement1);
}

getMembers();