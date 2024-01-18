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