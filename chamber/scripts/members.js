const containerElement = document.getElementById("gridListContainer");

const mainElement = document.querySelector("main");

const membersURL = "https://inoffensivelama.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (data) =>{
    mainElement.style.gridTemplateColumns = "1fr";

    data.members.forEach(member => {
        let memberElement = document.createElement("section");
        
        let nameElement = document.createElement("h2");
        nameElement.innerHTML = member.name;

        let addressElement = document.createElement("p");
        addressElement.innerHTML = member.address;

        let websiteElement = document.createElement("a");
        websiteElement.innerHTML = member.website;
        websiteElement.setAttribute("href", member.website);

        let iconElement = document.createElement("img");
        iconElement.setAttribute("src", (`images/${member.image}`));
        iconElement.setAttribute("alt", member.name);
        iconElement.setAttribute("class", "iconImage");

        iconElement.style.padding = "20px";


        let membershipElement = document.createElement("p");
        membershipElement.innerHTML = member.membership_level;

        let sloganElement = document.createElement("p");
        sloganElement.innerHTML = member.other_information;

        memberElement.style.display = "grid";
        memberElement.style.gridTemplateColumns = "2fr 1fr";
        memberElement.style.border = "solid 2px var(--secondary)";
        memberElement.style.borderRadius = "15px";
        memberElement.style.margin = "5px";
        memberElement.style.padding = "5px";

        nameElement.style.gridColumn = "1/2";
        addressElement.style.gridColumn = "1/2";
        websiteElement.style.gridColumn = "1/2";
        membershipElement.style.gridColumn = "1/2";
        sloganElement.style.gridColumn = "1/2";
        iconElement.style.gridColumn = "2/3";

        nameElement.style.gridRow = "1/2";
        addressElement.style.gridRow = "2/3";
        websiteElement.style.gridRow = "3/4";
        membershipElement.style.gridRow = "4/5";
        sloganElement.style.gridRow = "5/6";
        iconElement.style.gridRow = "1/6";

        memberElement.setAttribute("class", "gridMode");

        memberElement.appendChild(nameElement);
        memberElement.appendChild(addressElement);
        memberElement.appendChild(websiteElement);
        memberElement.appendChild(iconElement);
        memberElement.appendChild(membershipElement);
        memberElement.appendChild(sloganElement);

        containerElement.appendChild(memberElement);
    })

}

const gridViewButton = document.getElementById("gridView");
const root = document.documentElement;


gridViewButton.addEventListener("click", function() {
    gridViewButton.classList.toggle("gridList");

    containerElement.classList.toggle("gridChange");
});

getMembers();