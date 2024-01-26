// script.js

// Get the sign-up form element by its ID
const signUpForm = document.getElementById("signup-form");

// Add a submit event listener to the form
signUpForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username, email, and password input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // You can add your own logic here to handle the sign-up process
    // For this example, we'll just display the input values in an alert
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
});
