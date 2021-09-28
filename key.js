var boxy = document.getElementById('boxy');
var snd1 = document.getElementById('snd1');
var snd2 = document.getElementById('snd2');
var snd3 = document.getElementById('snd3');
var snd4 = document.getElementById('snd4');
var snd5 = document.getElementById('snd5');

var boxyPos = {x: 0, y: 0};
var keyList = {};

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
function keyPressed(evt) {
   
    // console.log(evt);
    //detech multiple keys;
    
    keyList[evt.keyCode] = true;
    if(keyList[39]) {
        console.log("GO RIGHT")
        boxyPos.x += 5;
    }
    if(keyList[37]) {
        console.log("GO left")
        boxyPos.x -= 5;
    }
    if(keyList[38]) {
        console.log("GO up")
        boxyPos.y -= 5;
    }
    if(keyList[40]) {
        console.log("GO DOWN");
        boxyPos.y += 5;
    }

    //Only move on one key 
    // switch(evt.keyCode) {
    //     case 39: // right
    //         boxyPos.x += 5;
    //         break;
    //     case 37: // left
    //         boxyPos.x -= 5;
    //         break;
    //     case 38: // up
    //         boxyPos.y -= 5;
    //         break;
    //     case 40: // down
    //         boxyPos.y += 5;
    //         break;
    // }
    
    boxy.style.left = boxyPos.x + 'px';
    boxy.style.top = boxyPos.y + 'px';
}


function keyReleased(evt) {
    delete keyList[evt.keyCode];
}