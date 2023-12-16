function throwInvalidUserFeedback(message) {
    const inputUser = document.getElementById('input-user');
    const invalidMessageUser = document.getElementById('invalid-user');

    if (!inputUser.classList.contains("invalid-input-feedback"))
        inputUser.classList.add("invalid-input-feedback");

    invalidMessageUser.classList.remove("is-hidden");
    invalidMessageUser.innerHTML = message;
}

function throwInvalidPasswordFeedback(message) {
    const inputPass = document.getElementById('input-pass');
    const invalidMessagePass = document.getElementById('invalid-pass');

    if (!inputPass.classList.contains("invalid-input-feedback"))
        inputPass.classList.add("invalid-input-feedback");

    invalidMessagePass.classList.remove("is-hidden");
    invalidMessagePass.innerHTML = message;
}
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