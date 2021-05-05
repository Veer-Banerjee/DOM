// Setting time interval
setInterval(checkBackground,350);

function checkBackground() {
    generateRandomColor();
    changeBackgroundColor();
    changeBackgroundText();
}

// Generating random color
function generateRandomColor() {
    return '#'+Math.floor(Math.random()*17777215).toString(16);
}

// Changing background color
function changeBackgroundColor() {
    let colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
}

// Changing background text
function changeBackgroundText() {
    let textBg = document.getElementById("text-bg");
    if(textBg.innerHTML == 'LETS ROCK AND ROLL'){
        textBg.innerHTML = 'ON THE FLOOR KIDS';
}
    else if(textBg.innerHTML == 'ON THE FLOOR KIDS') {
        textBg.innerHTML = 'HIT IT HARD';
    }

    else if(textBg.innerHTML == 'HIT IT HARD') {
        textBg.innerHTML = 'ROCK THE PARTY KIDS';
    }

    else if(textBg.innerHTML == 'ROCK THE PARTY KIDS') {
        textBg.innerHTML = 'LETS ROCK AND ROLL';
    }
}