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

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', validateForm);
