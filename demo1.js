var buttonLeft = document.getElementById("button-left");
var buttonRight = document.getElementById("button-right");
var sliderHolder = document.getElementById("slider-holder");

var pos = 0;

function swipe (num) {
    pos = pos + num;

    if (pos > 200) {
        pos = 0;
       
    } else if (pos < 0) {
        pos = 200;
    }
    sliderHolder.style.transform =`translateX(${-pos}vw)`;
}

setInterval(checkTime, 3000)

function checkTime () {
    pos += 100;
    if (pos > 200) {
        pos = 0;
    }
    sliderHolder.style.transform =`translate(${-pos}vw)`;
}