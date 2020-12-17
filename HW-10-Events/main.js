const audioButtonQ = new Audio("http://www.soundjay.com/button/sounds/button-1.mp3");
const audioButtonW = new Audio("http://www.soundjay.com/button/sounds/button-2.mp3");
const audioButtonE = new Audio("http://www.soundjay.com/button/sounds/button-3.mp3");
const audioButtonR = new Audio("http://www.soundjay.com/button/sounds/button-4.mp3");
const audioButtonT = new Audio("http://www.soundjay.com/button/sounds/button-5.mp3");

function playMusic(event) {
    console.log(event);
    switch (event.key) {
        case 'q':
            audioButtonQ.play();
            break;
        case 'w':
            audioButtonW.play();
            break;
        case 'e':
            audioButtonE.play();
            break;
        case 'r':
            audioButtonR.play();
            break;
        case 't':
            audioButtonT.play();
            break;
    }
}

document.addEventListener('keydown', playMusic);