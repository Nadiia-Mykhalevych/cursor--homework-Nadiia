let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
function generateBlocks() {
    let y = 0;
    for (let i = 0; i < 5; i++) {
       let x = 0;
        for (let j = 0; j < 5; j++) {
            context.fillRect(x, y,50,50);
            context.fillStyle = randomColor();
            x = x + 50;
        }
        y = y + 50;
    }
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);   // The function returns the product of p1 and p2
}

function generateBlocksInterval() {
    setInterval(() => {
        generateBlocks();
    }, 1000);
}
generateBlocksInterval();
