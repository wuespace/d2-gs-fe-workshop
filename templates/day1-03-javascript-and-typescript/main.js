document.addEventListener('DOMContentLoaded', () => {
    var elem = document.getElementById('Name');
    elem.innerHTML = "Pablo Klaschka";
    elem.addEventListener('click', () => {
        elem.innerHTML = "Jan Tischhöfer";
    });
});

function changeSocial() {
    var social = document.getElementById('social');
    if (social.innerHTML === "Instagram") {
        social.href = "https://github.com/jantischhoefer";
        social.innerHTML = "GitHub";   
    } else {
        social.href = "https://www.instagram.com/jan_ofnr/";
        social.innerHTML = "Instagram";
    }
}

function bigRed() {
    alert('How dare you!');
    var interval = setInterval(() => {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);
    }, 300);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}