// global variable
let intervalId;

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let hexVal = "#";
    for (let i = 0; i < 6; i++){
        const randInt = randomIndex();
        hexVal += hex[randInt];
    }
    return hexVal;
}

function randomIndex(){
    return Math.floor(Math.random()*16);
}

const changeColor = function(){
    document.body.style.backgroundColor = randomColor();
}

const startChangeColor = function(){
    if (!intervalId){
        intervalId = setInterval(changeColor, 750);
    }
}

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    // to make sure the value of the gobal variable is de-referenced
}

document.querySelector("#start").addEventListener('click', startChangeColor);

document.querySelector("#stop").addEventListener('click', stopChangeColor);