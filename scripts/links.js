const baseURL = "https://inoffensivelama.github.io/wdd230/";
const linksURL = "https://inoffensivelama.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (data) => {
    let i = 0;
    data.forEach(week => {
        const linkParent = document.querySelector("#linkMenu");
        let listElement = document.createElement("li");
        listElement.innerHTML += `Week0${i}: `;

        week.foreach(link => {
            let linkElement = document.createElement("a");

            linkElement.setAttribute("href", link.url);
            listElement.innerHTML += ` | `;
            listElement.appendChild(linkElement);
        });

        linkParent.appendChild(listElement);
        
        i++;
    });
}

  
getLinks();