window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);


var container = document.getElementById('container');
var keynotes =[
    {
        key:'A',
        keyCode:65,
        src: new Howl({src:['audio/1.mp3']})},
    {
        key:'S',
        keyCode:83,
        src:new Howl({src:['audio/2.mp3']})},
    
    {
        key:'D',
        keyCode:68,
        src:new Howl({src:['audio/3.mp3']})},
    {
        key:'F',
        keyCode:70,
        src:new Howl({src:['audio/4.mp3']})},
    {
        key:'G',
        keyCode:71,
        src:new Howl({src:['audio/5.mp3']})},
    {
        key:'H',
        keyCode:72,
        src:new Howl({src:['audio/6.mp3']})},
    {
        key:'J',
        keyCode:74,
        src:new Howl({src:['audio/7.mp3']})},
    {
        key:'K',
        keyCode:75,
        src:new Howl({src:['audio/8.mp3']})},
    {
        key:'L',
        keyCode:76,
        src:new Howl({src:['audio/9.mp3']})}

]







for (i = 0; i < keynotes.length; i++) {
    var pianokeys = document.createElement('span');
    var pianokeysText = document.createElement('h1');

    pianokeysText.innerHTML = keynotes[i].key;
    

    pianokeys.classList.add('keys');
    pianokeys.appendChild(pianokeysText);
    container.appendChild(pianokeys);
}

var keyId = document.querySelectorAll('span');

var keyList = [];
function keyPressed(evt) {
    keyList[evt.keyCode] = true;
    


    for (i=0; i <keynotes.length; i++) {
        if (keynotes[i].keyCode == evt.keyCode ) {
            keynotes[i].src.play();
           

        }
    }
  
}



function keyReleased(evt) {
    delete keyList[evt.keyCode];    

    
}