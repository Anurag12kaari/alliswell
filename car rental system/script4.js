// script.js

// Get all the "Rent Now" links by their class name
const rentNowLinks = document.querySelectorAll(".rent-now-link");

// Add a click event listener to each link
rentNowLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the car model name from the h3 element in the same list item
        const carModelName = this.closest("li").querySelector("h3").textContent;

        // You can add your own logic here, like redirecting to a rental page or displaying more information about the selected car
        alert(`You clicked 'Rent Now' for ${carModelName}`);
    });
});
