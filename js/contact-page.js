/* ─── Manuseando Selects ─────────────── */

const identity = document.getElementById('contactIdentity');
identity.addEventListener('change', handleOtherIdentity);

function handleOtherIdentity() {
    const otherIdentityDiv = document.getElementById('identityOtherDiv');
    const otherIdentity = document.getElementById('contactIdentityOther');

    if (identity.value === 'other' && otherIdentityDiv.classList.contains('is-hidden')) {
        otherIdentityDiv.classList.remove('is-hidden');
    } else {
        otherIdentityDiv.classList.add('is-hidden');
        otherIdentity.value = null;
    }
}

const subject = document.getElementById('contactSubject');
subject.addEventListener('change', handleOtherSubject);

function handleOtherSubject() {
    const otherSubjectDiv = document.getElementById('subjectOtherDiv');
    const otherSubject = document.getElementById('contactOtherSubject');

    if (subject.value === 'other' && otherSubjectDiv.classList.contains('is-hidden')) {
        otherSubjectDiv.classList.remove('is-hidden');
    } else {
        otherSubjectDiv.classList.add('is-hidden');
        otherSubject.value = null;
    }
}

/* ─── Formatando Inputs ─────────────── */

const message = document.getElementById('contactMessage');
message.addEventListener('input', function () {
    autoResizeMessage();
    countCharsMessage(this.value.length);
});

function autoResizeMessage() {
    message.style.height = 'auto';
    message.style.height = (message.scrollHeight) + 'px';
}

function countCharsMessage(messageLength) {
    let maxChars = 500;
    const counter = document.getElementById('messageLengthCounter');
    counter.innerHTML = maxChars - messageLength;
    
    const characterPlural = document.getElementById("messageCharacterPlural")
    characterPlural.innerHTML = (counter.innerHTML == 1) ? 'character left' : 'characters left';
}

document.addEventListener('DOMContentLoaded', countCharsMessage(message.value.length));

const phoneNumber = document.getElementById("contactPhone");
phoneNumber.addEventListener('input', function () {
    this.value = formatPhoneNumber(this.value);
})

function formatPhoneNumber(phoneString) {
    const numbers = phoneString.replace(/\D/g, "");

    if (numbers.length === 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else if (numbers.length === 11) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else return numbers;
}