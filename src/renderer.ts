// browser renderer
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d");

// draws a dot at given location
function drawDot(x: number, y: number, radius: number = 3, color: string = "black") {
    if (ctx != null) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

// generates a random number in [min, max)
function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

// places a random dot
function placeRandomDot() {
    const x = randomInRange(0, canvas.width);
    const y = randomInRange(0, canvas.height);
    drawDot(x, y);
}



// script
drawDot(100, 100); // initial dot
setInterval(placeRandomDot, 10000); // calls every 10 seconds