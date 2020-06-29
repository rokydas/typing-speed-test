
var distance = 61000;
document.querySelector(".start").addEventListener("click", go);

function go() {
    
    x = setInterval(countDown, 1000);
}

function countDown() {
    distance = distance - 1000;
    var seconds = Math.floor(distance / 1000);
    document.querySelector(".time").innerHTML ="Time: " + seconds + " sec ";

    if (distance == 0) {
        clearInterval(x);
        document.querySelector(".time").innerHTML = "EXPIRED";
    }
}



