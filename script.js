document.addEventListener("DOMContentLoaded", function () {
    // Function to add item to the grocery list
    function addItem() {
        // Get the input element by its ID
        var inputElement = document.getElementById("addItemInput");

        // Get the value (text) from the input
        var inputValue = inputElement.value;

        // Clear the input field
        inputElement.value = "";

        // Get the ul element by its ID
        var ulElement = document.getElementById("groceryList");

        // Create a new li element
        var liElement = document.createElement("li");

        // Set the text content of the li element to the entered value
        liElement.textContent = inputValue;

        // Append the li element to the ul element
        ulElement.appendChild(liElement);
    }

    // Add event listener to the "Save" button
    var saveButton = document.querySelector("button");
    saveButton.addEventListener("click", addItem);
});
