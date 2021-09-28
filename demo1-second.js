//target slider holder

var sliderHolder = document.getElementById("slider-holder");


// var createSliderEle = document.createElement('div');
// createSliderEle.classList.add('slider');


// sliderHolder.appendChild(createSliderEle);

var sliderList = [
    {id:"slider 1", title:"Welcome", p:"Enjoy your stay"}, 
    {id:"slider 2", title:"Welcome Again", p:"Enjoy your stay again"},
    {id:"slider 3", title:"Welcome Chee Hoe", p:"Enjoy your stay"}
];

for (var i=0; i < sliderList.length; i++) {
    console.log("create element",i);
    var createSliderEle = document.createElement('div');

    var textSlider = document.createElement('h1');
    textSlider.innerHTML = sliderList[i].title;

    
    createSliderEle.classList.add('slider');
    createSliderEle.appendChild(textSlider);
    sliderHolder.appendChild(createSliderEle);

    sliderHolder.style.width = (i+1)*100 + 'vw';
}

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
