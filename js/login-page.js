function throwInvalidUserFeedback(message) {
    const inputUser = document.getElementById('input-user');
    const invalidMessageUser = document.getElementById('invalid-user');

    if (!inputUser.classList.contains("is-danger"))
        inputUser.classList.add("is-danger");

    invalidMessageUser.classList.remove("is-hidden");
    invalidMessageUser.innerHTML = message;
}

function throwInvalidPasswordFeedback(message) {
    const inputPass = document.getElementById('input-pass');
    const invalidMessagePass = document.getElementById('invalid-pass');

    if (!inputPass.classList.contains("is-danger"))
        inputPass.classList.add("is-danger");

    invalidMessagePass.classList.remove("is-hidden");
    invalidMessagePass.innerHTML = message;
}

function validateEmpty() {
    const inputUser = document.getElementById('input-user');
    const inputPass = document.getElementById('input-pass');
    let validationCounter = 0;

    if (inputUser.value == "" || inputUser.length == 0) {
        throwInvalidUserFeedback("Inform your username or email.");
        ++validationCounter;
    }
    if (inputPass.value == "" || inputPass.length == 0) {
        throwInvalidPasswordFeedback("Inform your password.");
        ++validationCounter;
    }
    if (validationCounter != 0) return false;
}

function validateLogin() {
    const inputUser = document.getElementById('input-user');
    const inputPass = document.getElementById('input-pass');
    let validationCounter = 0;

    if (inputUser.value != "user" && inputUser.value != "user@email.com") {
        throwInvalidUserFeedback("Invalid username!");
        ++validationCounter;
    }
    if (inputPass.value != "user123") {
        throwInvalidPasswordFeedback("Invalid password!");
        ++validationCounter;
    }
    if (validationCounter != 0) return false;
}

function validateForm() {
    const inputUser = document.getElementById('input-user');
    const inputPass = document.getElementById('input-pass');

    inputUser.value = inputUser.value.trim();
    inputPass.value = inputPass.value.trim();

    if (validateEmpty() == false) return;
    if (validateLogin() == false) return;
}
const submitButton = document.getElementById('button-login');
submitButton.addEventListener("click", function() {
    validateForm();
})

function togglePasswordVisibility() {
    const inputPass = document.getElementById('input-pass');
    const iconTogglePass = document.getElementById('iconTogglePass');

    if (iconTogglePass.name == "eye-off") {
        iconTogglePass.setAttribute ("name", "eye");
        inputPass.type = "text";
    }
    else if (iconTogglePass.name == "eye") {
        iconTogglePass.setAttribute ("name", "eye-off");
        inputPass.type = "password";
    }
}
const buttonTogglePass = document.getElementById('buttonTogglePass');
buttonTogglePass.addEventListener("click", function() {
    togglePasswordVisibility();
})