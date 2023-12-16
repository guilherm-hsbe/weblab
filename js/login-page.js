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