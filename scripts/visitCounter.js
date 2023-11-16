let visitElement = document.querySelector("#numberVisits");

numberVisits = localStorage.getItem("numberVisitsLS");



if (numberVisits == null | isNaN(parseInt(numberVisits))){
    numberVisits = 1;
}else{
    numberVisits = parseInt(numberVisits) + 1;
}

visitElement.textContent = numberVisits;

localStorage.setItem("numberVisitsLS", numberVisits);