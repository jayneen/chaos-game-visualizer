// constants
// browser renderer
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d");

//global variables of the current point
let currX = 0;
let currY = 0;

// starts in fullscreen
document.documentElement.requestFullscreen();

// buttons
// adds a new point to the canvas
window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "Space") {
    if (ctx != null) {
        placeRandomDot();
    }
  }
});


// functions
// draws a dot at given location
function drawDot(x: number, y: number, radius: number = 3, color: string = "black") {
    currX = x;
    currY = y;

    if (ctx != null) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

//draws the initial dots
function vertexDots() {
    if (ctx != null) {
        ctx.beginPath();
        ctx.arc(150, 5, 3, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(10, 295, 3, 0, Math.PI * 2);
        ctx.fillStyle = "orange";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(290, 295, 3, 0, Math.PI * 2);
        ctx.fillStyle = "purple";
        ctx.fill();
    }

}

// generates a random number in [min, max)
function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

// places a random dot
function placeRandomDot() {
    const temp = Math.floor(Math.random() * 3);

    if (temp == 0) {
        //green
        //x 150, y 5
        drawDot((currX + 150) / 2, (currY + 5) / 2, 1, "green")
    }
    else if (temp == 1) {
        //orange
        //x 10, y 295
        drawDot((currX + 10) / 2, (currY + 295) / 2, 1, "orange")
    }
    else {
        //purple
        //x 290, y 295
        drawDot((currX + 290) / 2, (currY + 295) / 2, 1, "purple")
    }
}



// script
vertexDots();
// initial dot, will need to add a check after we map a new dot to delete 
// the old dot if it is outside the 3 vertex dots
drawDot(randomInRange(0, canvas.width), randomInRange(0, canvas.height)); 
setInterval(placeRandomDot, 100); // calls every 10 seconds