const input = document.querySelector("#favchap");
const button = document.querySelector("button")
const list = document.querySelector("#list");

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});




button.addEventListener("click",  () => {
    if(input.value != ""){
        
        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

        input.focus();

    }
})

function displayList(item){
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌"
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })

}

function setChapterList() {
    localStorage.setItem("BoMChaptersList", JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem("BoMChaptersList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}