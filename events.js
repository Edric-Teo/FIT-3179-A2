function enlargeByHover(id) {
    document.getElementById(id).style.transform = "scale(1.2)";
}

function resetSize(id) {
    document.getElementById(id).style.transform = "scale(1)";
}

function getName(id) {
    return document.getElementById(id).getAttribute("name");
}

function removeName(id) {
    return document.getElementById(id).removeAttribute("name")
}

document.addEventListener("DOMContentLoaded", function() {
    var event1 = document.getElementById("eventHover");
    if (event1) {
        event1.addEventListener("mouseover", function() { enlargeByHover("eventHover"); });
        event1.addEventListener("mouseout", function() { resetSize("eventHover"); });
        event1.addEventListener("mouseover", function() { alert(getName("eventHover")); });
        event1.addEventListener("click", function() { removeName("eventHover"); });
    }
});