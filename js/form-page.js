// global-const-variables
const cbtemp = document.getElementById("q2-opt4-all");
const cbsecret = document.getElementById("q2-opt3-secret");
const cbpass = document.getElementById("q2-opt2-pass");
const cbcook = document.getElementById("q2-opt1-cookies");

// Option4_Quesion2 EventListener
cbtemp.addEventListener('change', function () {

    // uncheck-options-question-2
    if (cbtemp.checked) {
        cbsecret.checked = false;
        cbpass.checked = false;
        cbcook.checked = false;
    }
});