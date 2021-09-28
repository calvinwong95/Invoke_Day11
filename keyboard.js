window.addEventListener('keydown',keyPressed);
window.addEventListener('keyup' ,keyReleased);

var boxy = document.getElementById('boxy');

var boxyPos = {x:0, y:0};


var snd1 = document.getElementById('snd1');
var snd2 = document.getElementById('snd2');
var snd3 = document.getElementById('snd3');
var snd4 = document.getElementById('snd4');
var snd5 = document.getElementById('snd5');

var keyList = [];
function keyPressed(evt) {
    //push the keycode into array, and assign to true
    keyList[evt.keyCode] = true;
    console.log(keyList);


    //detect mutiple keys
    if(keylist[39]) {
        boxyPos.x +=5;
    }

    // switch(evt.keyCode) {
    //     case keyList[39]:
    //         console.log('go right');
    //         boxyPos.x += 5;
    //         break;
        
    //     case keyList[37]:
    //         console.log('go left');
    //         boxyPos.x -= 5;
    //         break;

    //     case keyList[40]:
    //         console.log('go down');
    //         boxyPos.y += 5;

    //     case keyList[38]:
    //         console.log('go up');
    //         boxyPos.y -= 5;
    // }
    //if the evt.keyCode == ?? then boxyPos.x ++
    //RIGHT BUTTON//

    // if (evt.keyCode === 39) {
    //     boxyPos.x += 5;
    // }

    // if (evt.keyCode === 37) {
    //     boxyPos.x -= 5;
    // }

    // if (evt.keyCode === 38) {
    //     boxyPos.y -= 5;
    // }

    // if (evt.keyCode === 40) {
    //     boxyPos.y += 5;
    // }

    switch(evt.keyCode) {

        case 39:
            boxyPos.x +=5;
            break;
        
        case 37: //left
            boxyPos.x -=5;
            break;
        
        case 38:
            boxyPos.y -=5;
            break;
        
        case 40: //down
            boxyPos.y +=5;
            break;
    }

    console.log(boxyPos.y)
    console.log(boxyPos.x)
    boxy.style.left = boxyPos.x + 'px';
    boxy.style.top = boxyPos.y + 'px';
}

function keyReleased(evt) {
    delete keyList[evt.keyCode];
}