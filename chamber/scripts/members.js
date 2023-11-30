const mainElement = document.querySelector("main");

const linksURL = "https://inoffensivelama.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}