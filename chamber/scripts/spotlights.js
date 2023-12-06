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
    let random2;
    let random3;

    do {
        random1 = Math.floor(Math.random() * members.length);
    }
    while (members[random1].membership_level !== "Gold" && members[random1].membership_level !== "Platinum"); 

    do {
        random2 = Math.floor(Math.random() * members.length);
    }
    while ((members[random2].membership_level !== "Gold" && members[random2].membership_level !== "Platinum") || (random1 === random2)); 

    do {
        random3 = Math.floor(Math.random() * members.length);
    }
    while ((members[random3].membership_level !== "Gold" && members[random3].membership_level !== "Platinum") || ((random3 === random2) || (random3 === random1))); 

    let compName1 = document.createElement("h2");
    compName1.textContent = members[random1].name;

    let iconElement1 = document.createElement("img");
    iconElement1.setAttribute("src", (`images/${members[random1].image}`));
    iconElement1.setAttribute("alt", members[random1].name);
    iconElement1.setAttribute("width", "100px");

    iconElement1.style.padding = "10px";


    let compName2 = document.createElement("h2");
    compName2.textContent = members[random2].name;

    let iconElement2 = document.createElement("img");
    iconElement2.setAttribute("src", (`images/${members[random2].image}`));
    iconElement2.setAttribute("alt", members[random2].name);
    iconElement2.setAttribute("width", "100px");

    iconElement2.style.padding = "10px";


    let compName3 = document.createElement("h2");
    compName3.textContent = members[random3].name;

    let iconElement3 = document.createElement("img");
    iconElement3.setAttribute("src", (`images/${members[random3].image}`));
    iconElement3.setAttribute("alt", members[random3].name);
    iconElement3.setAttribute("width", "100px");

    iconElement3.style.padding = "10px";


    spotlight1.setAttribute("class", "spotlight-card");

    spotlight1.appendChild(compName1);
    spotlight1.appendChild(iconElement1);


    spotlight2.setAttribute("class", "spotlight-card");

    spotlight2.appendChild(compName2);
    spotlight2.appendChild(iconElement2);


    spotlight3.setAttribute("class", "spotlight-card");

    spotlight3.appendChild(compName3);
    spotlight3.appendChild(iconElement3);
}

getMembers();