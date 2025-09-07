const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const eye = document.getElementById("eye");
const switchPage = document.getElementById("switchPage");
const heading = document.getElementById("heading");
const bottom = document.getElementById("bottomText");
const button = document.getElementById("submitButton");
const nameContainer = document.getElementById("nameContainer");
const usernameLabel = document.getElementById("usernameLabel");
const passwordLabel = document.getElementById("passwordLabel");
let isLogin;
setLogin(location.search.includes("login"));

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    nameInput.addEventListener("input", validateName);
    usernameInput.addEventListener("input", validateUsername);
    passwordInput.addEventListener("input", validatePassword);

    if (!validateForm()) {
        console.log("Refused")
        return;
    }

    let response = isLogin ? await login() : await signup();

    if (response.ok) {
        nameInput.removeEventListener("input", validateName);
        usernameInput.removeEventListener("input", validateUsername);
        passwordInput.removeEventListener("input", validatePassword);
        alert("Login successfully");
        return;
    }

    alert("Combination of username and password is incorrect.");
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

switchPage.addEventListener("click", function (e) {
    navigate(e);

});

function validateForm() {
    let nameValidated = validateName();
    let usernameValidated = validateUsername();
    let passwordValidated = validatePassword();
    return nameValidated && usernameValidated && passwordValidated;
}

function validate(value, name, regex, regexError, min = 2, max = 30) {
    if (!value) return `${name} is required`;
    else if (!isLogin && value.length < min) return `Please enter at least ${min} characters`;
    else if (!isLogin && value.length > max) return `${name} should not be longer than ${max} characters`;
    else if (!isLogin && !value.match(regex)) return regexError;

    return null;
}

function validateName() {
    if (isLogin) return true;

    console.log("Validating name");
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

    const msg = validate(value, "Password", /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/, "Weak Password", 0, 100);

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

function navigate(event) {
    event.preventDefault();
    if (isLogin) {
        window.history.pushState({}, "bs", "?type=signup");
        setLogin(false);
    } else {
        setLogin(true);
        window.history.pushState({}, "", "?type=login");
    }
}

function setLogin(value) {
    form.reset();
    isLogin = value;
    updateUi(isLogin);
}

function updateUi(login) {
    heading.innerText = login ? "Welcome Back" : "Create Your Secure Account";
    usernameLabel.innerText = login ? "Username" : "Unique Username";
    usernameInput.placeholder = login ? "Enter a username" : "Create a unique username";
    passwordLabel.innerText = login ? "Password" : "Strong Password";
    passwordInput.placeholder = login ? "Enter your password" : "Create a strong  Password";
    button.innerText = login ? "Login" : "Create My Secure Account";
    bottom.innerText = `${login ? "Don't" : "Already"} have an account`;
    switchPage.innerText = login ? "Signup" : "Login";

    if (login) {
        nameContainer.classList.add("hidden");
    } else {
        nameContainer.classList.remove("hidden");
    }
}

async function signup() {
    let name = nameInput.value.trim();
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    return {
        ok: true,
    }
}

async function login() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username.match(/^[A-Za-z][A-Za-z0-9._]{2,}$/) && username === "john"
        && password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/) && password === "John@123") {
        return {
            ok: true,
        }
    }

    return {
        ok: false,
    }
}