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

        // Create a new li element
        const liElement = document.createElement("li");

        // Set the text content of the li element to the entered value
        liElement.textContent = inputValue;

        // Append the li element to the ul element
        ulElement.appendChild(liElement);
    }

    // Add event listener to the "Save" button
    const saveButton = document.querySelector("button");
    saveButton.addEventListener("click", addItem);
});
