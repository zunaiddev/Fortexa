const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateName();
    validateUsername();
    validatePassword();
    console.log("Form Submitted");
});

function validateName() {
    if (nameInput.value.trim().length > 3) {
        nameError.style.display = "none";
        return true;
    }

    nameError.style.display = "inline";
    nameError.innerText = "Please enter a name";
    return false;
}

function validateUsername() {
    if (nameInput.value.trim().length < 3) {
        nameError.style.display = "none";
        return true;
    }

    nameError.style.display = "inline";
    nameError.innerText = "Please enter a name";
    return false;
}

function validatePassword() {
    if (nameInput.value.trim().length < 3) {
        nameError.style.display = "none";
        return true;
    }

    nameError.style.display = "inline";
    nameError.innerText = "Please enter a name";
    return false;
}