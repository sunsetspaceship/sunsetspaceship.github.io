function addItem() {
    const inputElement = document.getElementById("addItemInput");
    const inputValue = inputElement.value;
    inputElement.value = "";

    const ulElement = document.getElementById("groceryList");
    const listItemDiv = document.createElement("div");
    const itemSpan = document.createElement("span");
    itemSpan.textContent = inputValue;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✕";
    deleteButton.classList.add("delete-button");

    listItemDiv.appendChild(itemSpan);
    listItemDiv.appendChild(deleteButton);
    ulElement.appendChild(listItemDiv);

    saveListToLocalStorage();
}

function saveListToLocalStorage() {
    const ulElement = document.getElementById("groceryList");
    const listItems = ulElement.querySelectorAll("div");
    const itemList = Array.from(listItems).map(itemDiv => itemDiv.querySelector("span").textContent);
    localStorage.setItem("groceryList", JSON.stringify(itemList));
}

function loadListFromLocalStorage() {
    const ulElement = document.getElementById("groceryList");
    const savedList = localStorage.getItem("groceryList");
    const itemList = savedList ? JSON.parse(savedList) : [];

    ulElement.innerHTML = "";

    itemList.forEach(itemText => {
        const listItemDiv = document.createElement("div");
        const itemSpan = document.createElement("span");
        itemSpan.textContent = itemText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");

        listItemDiv.appendChild(itemSpan);
        listItemDiv.appendChild(deleteButton);
        ulElement.appendChild(listItemDiv);

        deleteButton.addEventListener("click", function () {
            ulElement.removeChild(listItemDiv);
            saveListToLocalStorage();
        });
    });
}

const saveButton = document.querySelector("button");
saveButton.addEventListener("click", addItem);

loadListFromLocalStorage();
