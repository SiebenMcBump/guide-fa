window.onload = function () {
    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("active");
    });
}

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");

    // Cache les descriptions
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("active", "hidden");
    }

    // Retire les couleurs de la navbar
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Affiche la description cliquée
    document.getElementById(tabName).className = document.getElementById(tabName).className.replace("hidden", "active");

    // Ajoute la couleur à la description cliquée
    for (i = 0; i < evt.currentTarget.childNodes.length; i++) {
        if (evt.currentTarget.childNodes[i].localName == "a") {
            evt.currentTarget.childNodes[i].className += " active";
        }
    }
}

function collapse(evt) {
    // Fait baisser les onglets de la navbar
    evt.currentTarget.classList.toggle("rotate");
    for (i = 0; i < evt.currentTarget.parentNode.childNodes.length; i++) {
        if (evt.currentTarget.parentNode.childNodes[i].localName == "ul") {
            evt.currentTarget.parentNode.childNodes[i].classList.toggle("hidden");
        }
    }
}
