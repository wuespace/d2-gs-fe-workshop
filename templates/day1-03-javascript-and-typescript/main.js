function bigRed() {
    alert("How dare you!");
    var interval = setInterval(flash, 300);
    setTimeout(() => {
        clearInterval(interval)
    }, 5000);
}

function flash() {
    //for(var i = 0; i <= 5; i++) {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);
    //}
}

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