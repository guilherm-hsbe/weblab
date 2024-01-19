let i = 0;
const txt = 'THIS IS HOW YOUR DIGITAL JOURNEY CONTINUES.';
const speed = 40;
function heroSubtitleWriter() {
    if (i < txt.length) {
        document.getElementById("heroSubtitle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(heroSubtitleWriter, speed);
    }
} heroSubtitleWriter();
function throwValidLogin() {
    throwEmailFeedback();
    throwPasswordFeedback();

    let loginButton = document.getElementById('loginButton');
    let loginButtonMessage = document.getElementById('loginButtonMessage');
    let loginButtonIcon = document.getElementById('loginButtonIcon');

    loginButton.classList.add('has-bg-success', 'is-disabled');
    loginButtonMessage.innerHTML = 'Logged In'
    loginButtonIcon.classList = []
    loginButtonIcon.classList.add('fa-solid', 'fa-check', 'fa-bounce');

    document.getElementById('userPassword').disabled = true;
    document.getElementById('userEmail').disabled = true;

}
function throwPasswordFeedback(message, isInvalid) {
    const messagePassword = document.getElementById('alertPassword');
    if (isInvalid == true) {
        messagePassword.classList.remove("is-hidden");
        messagePassword.innerHTML = message;
    }
    else if (!messagePassword.classList.contains('is-hidden')) {
        messagePassword.classList.add("is-hidden");
        messagePassword.innerHTML = null;
    }
}

function throwEmailFeedback(message, isInvalid) {
    const messageEmail = document.getElementById('alertEmail');
    if (isInvalid == true) {
        messageEmail.classList.remove("is-hidden");
        messageEmail.innerHTML = message;
    }
    else if (!messageEmail.classList.contains('is-hidden')) {
        messageEmail.classList.add("is-hidden");
        messageEmail.innerHTML = null;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function verifyInputs() {
    const password = document.getElementById('userPassword');
    const email = document.getElementById('userEmail');
    let validationCounter = 0;

    if (password.value == "" || password.length == 0) {
        throwPasswordFeedback('Passsword cannot be empty.', true);
        ++validationCounter;
    } else throwPasswordFeedback();

    if (email.value == "" || email.length == 0) {
        throwEmailFeedback('Email address cannot be empty.', true);
        ++validationCounter;
    } else if (!isValidEmail(email.value)) {
        throwEmailFeedback('Invalid email address!', true);
        ++validationCounter;
    } else throwEmailFeedback();

    if (validationCounter != 0) return false;
}
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', validateForm);

function validateForm() {
    let password = document.getElementById('userPassword');
    let email = document.getElementById('userEmail');

    password.value = password.value.trim();
    email.value = email.value.trim();

    if (verifyEmptyValid() == false) return;
    throwValidLogin();
}