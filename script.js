document.addEventListener("DOMContentLoaded", function () {
    // Function to add item to the grocery list
    function addItem() {
        // Get the input element by its ID
        const inputElement = document.getElementById("addItemInput");

        // Get the value (text) from the input
        const inputValue = inputElement.value;

        // Clear the input field
        inputElement.value = "";

        // Get the ul element by its ID
        const ulElement = document.getElementById("groceryList");

        // Create a new div element for the list item
        const listItemDiv = document.createElement("div");

        // Create a span for the item text
        const itemSpan = document.createElement("span");
        itemSpan.textContent = inputValue;

        // Create a delete button for the list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        // Append the item text span and delete button to the div
        listItemDiv.appendChild(itemSpan);
        listItemDiv.appendChild(deleteButton);

        // Append the div to the ul element
        ulElement.appendChild(listItemDiv);

        // Save the updated list to local storage
        saveListToLocalStorage();
    }

    // Function to save the list to local storage
    function saveListToLocalStorage() {
        // Get the ul element by its ID
        const ulElement = document.getElementById("groceryList");

        // Get all div elements from the ul
        const listItems = ulElement.querySelectorAll("div");

        // Convert the NodeList to an array of item texts
        const itemList = Array.from(listItems).map(itemDiv => itemDiv.querySelector("span").textContent);

        // Save the array to local storage with a key "groceryList"
        localStorage.setItem("groceryList", JSON.stringify(itemList));
    }

    // Function to load the list from local storage
    function loadListFromLocalStorage() {
        // Get the ul element by its ID
        const ulElement = document.getElementById("groceryList");

        // Retrieve the saved array from local storage
        const savedList = localStorage.getItem("groceryList");

        // Parse the JSON string back to an array
        const itemList = savedList ? JSON.parse(savedList) : [];

        // Clear the current list
        ulElement.innerHTML = "";

        // Populate the ul element with div elements for each list item
        itemList.forEach(itemText => {
            // Create a div for the list item
            const listItemDiv = document.createElement("div");

            // Create a span for the item text
            const itemSpan = document.createElement("span");
            itemSpan.textContent = itemText;

            // Create a delete button for the list item
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");

            // Append the item text span and delete button to the div
            listItemDiv.appendChild(itemSpan);
            listItemDiv.appendChild(deleteButton);

            // Append the div to the ul element
            ulElement.appendChild(listItemDiv);

            // Add event listener to the delete button
            deleteButton.addEventListener("click", function () {
                // Remove the div from the ul
                ulElement.removeChild(listItemDiv);

                // Save the updated list to local storage
                saveListToLocalStorage();
            });
        });
    }

    // Add event listener to the "Add to List" button
    const saveButton = document.querySelector("button");
    saveButton.addEventListener("click", addItem);

    // Load the list from local storage when the page loads
    loadListFromLocalStorage();
});
