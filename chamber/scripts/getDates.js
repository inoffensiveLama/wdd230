const lastModifiedElement = document.querySelector("#lastModified");
const timeStampElement = document.querySelector("#timestamp");
const currentDate = new Date();

lastModifiedElement.textContent = new Date(document.lastModified);
try{
    timeStampElement.textContent = currentDate;
}catch{
    
}
