const currentYearElement = document.querySelector("#currentYear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = new Date(document.lastModified);