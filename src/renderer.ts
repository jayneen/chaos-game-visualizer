// constants

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// DOT SIZE //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const VERTEX_SIZE = 4;
const DOT_SIZE = 2;

const SUMM_ORANGE = "#fa9632";
const SUMM_PURPLE = "#7d327d";
const SUMM_GREEN = "#7d9632";
const SUMM_RED = "#c83219";
const SUMM_BLUE = '#01352f';

// browser renderer
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const rect = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

canvas.width = rect.width;
canvas.height = rect.height;

//global variables of the current point
let currX = 0;
let currY = 0;

// starts in fullscreen
document.documentElement.requestFullscreen();

// buttons
// adds a new point to the canvas

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// THE BUTTON //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "Space") {
    if (ctx != null) {
        placeRandomDot();
    }
  }
});


// functions
// draws a dot at given location
function drawDot(x: number, y: number, radius: number = DOT_SIZE, color: string = "black") {
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
        drawDot(canvas.width/2, 5, VERTEX_SIZE, SUMM_GREEN);
        drawDot(10, canvas.height - 5, VERTEX_SIZE, SUMM_ORANGE);
        drawDot(canvas.width - 10, canvas.height - 5, VERTEX_SIZE, SUMM_PURPLE);
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
        drawDot((currX + canvas.width/2) / 2, (currY + 5) / 2, DOT_SIZE, SUMM_GREEN);
    }
    else if (temp == 1) {
        //orange
        //x 10, y 295
        drawDot((currX + 10) / 2, (currY + canvas.height-5) / 2, DOT_SIZE, SUMM_ORANGE);
    }
    else {
        //purple
        //x 290, y 295
        drawDot((currX + canvas.width-10) / 2, (currY + canvas.height-5) / 2, DOT_SIZE, SUMM_PURPLE);
    }
}



// script
vertexDots();
// initial dot, will need to add a check after we map a new dot to delete 
// the old dot if it is outside the 3 vertex dots
// drawDot(randomInRange(0, canvas.width), randomInRange(0, canvas.height)); 
drawDot(canvas.width/2, canvas.height/2, DOT_SIZE, SUMM_BLUE);
setInterval(placeRandomDot, 5000); // calls every 5 seconds