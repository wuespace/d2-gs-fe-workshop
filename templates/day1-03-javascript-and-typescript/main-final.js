function bigRed() {
    alert("How dare you!");
    var image = document.getElementById('portrait');
    image.src = "https://tse3.mm.bing.net/th?id=OIP.pjodCYbUpIuhOgR1a5KY_wHaFj&pid=Api";
    var interval = setInterval(flash, 300);
    
    setTimeout(() => {
        image.src = "https://www.dailydot.com/wp-content/uploads/6d6/a0/740bf5f811111c88.jpg";
        clearInterval(interval);
    }, 5000);
}

function flash() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 200);
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