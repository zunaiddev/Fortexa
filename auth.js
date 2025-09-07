const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const eye = document.getElementById("eye");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    nameInput.addEventListener("input", validateName);
    usernameInput.addEventListener("input", validateUsername);
    passwordInput.addEventListener("input", validatePassword);

    if (!validateForm()) {
        console.log("Refused")
        return;
    }

    console.log("Form Submitted");
});

eye.addEventListener("click", function () {
    if (eye.src.endsWith("eye.svg")) {
        passwordInput.type = "text";
        eye.src = "assets/eyeSlash.svg";
    } else {
        passwordInput.type = "password";
        eye.src = "assets/eye.svg";
    }
});


function validateForm() {
    let nameValidated = validateName();
    let usernameValidated = validateUsername();
    let passwordValidated = validatePassword();
    return nameValidated && usernameValidated && passwordValidated;
}

function validate(value, name, regex, regexError, min = 2, max = 30) {
    if (!value) return `${name} is required`;
    else if (value.length < min) return `Please enter at least ${min} characters`;
    else if (value.length > max) return `${name} should not be longer than ${max} characters`;
    else if (!value.match(regex)) return regexError;

    return null;
}

function validateName() {
    const value = nameInput.value.trim();
    const msg = validate(value, "Name", /^[A-Za-z ]+$/, "Only english characters are allowed", 2, 40);

    if (msg) {
        showError(nameInput, nameError, msg);
        return false;
    }

    hideError(nameInput, nameError);
    return true;
}

function validateUsername() {
    const value = usernameInput.value.trim();
    const msg = validate(value, "Username", /^[A-Za-z][A-Za-z0-9._]{2,}$/, "Only letters, numbers, . or _, must start with a letter.");

    if (msg) {
        showError(usernameInput, usernameError, msg);
        return false;
    }

    hideError(usernameInput, usernameError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value.trim();
    const msg = validate(value, "Password", /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,20}$/, "Weak Password", 0, 100);

    if (msg) {
        showError(passwordInput, passwordError, msg);
        return false;
    }

    hideError(passwordInput, passwordError);
    return true;
}

function showError(inputElement, errorElement, text) {
    inputElement.classList.remove("border-slate-600/70")
    inputElement.classList.add("border-red-400");

    errorElement.classList.remove("hidden");
    errorElement.classList.add("inline");
    errorElement.innerText = text;
}

function hideError(inputElement, errorElement) {
    inputElement.classList.remove("border-red-400");
    inputElement.classList.add("border-slate-600/70")

    errorElement.classList.add("hidden");
    errorElement.classList.remove("inline");
}