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

        let membershipElement = document.createElement("p");
        membershipElement.innerHTML = member.membership_level;

        let sloganElement = document.createElement("p");
        sloganElement.innerHTML = member.other_information;


        memberElement.appendChild(nameElement);
        memberElement.appendChild(addressElement);
        memberElement.appendChild(websiteElement);
        memberElement.appendChild(iconElement);
        memberElement.appendChild(membershipElement);
        memberElement.appendChild(sloganElement);

        mainElement.appendChild(memberElement);
    })
}

getMembers();