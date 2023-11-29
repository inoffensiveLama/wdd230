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
    let i = 1;
    data.weeks.forEach(weekObj => {
        const linkParent = document.querySelector("#linkMenu");
        let listElement = document.createElement("li");
        listElement.innerHTML += `Week0${i}: `;

        weekObj.links.forEach(link => {
            let week_url = link.url;
            let week_title = link.title;
            listElement.innerHTML += ` | <a href=${baseURL}/${week_url}>${week_title}</a>`;
        })
        /*
        week.foreach(link => {
            let linkElement = document.createElement("a");

            linkElement.setAttribute("href", link.url);
            listElement.innerHTML += ` | `;
            listElement.appendChild(linkElement);
        });
        */
        linkParent.appendChild(listElement);
        
        i++;
    });
}

  
getLinks();