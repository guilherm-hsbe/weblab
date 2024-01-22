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