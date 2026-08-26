console.log ("Hello world :D");

function setup() {
    createCanvas(400,400)
}

function draw() {
    background(200)
    rectMode (CENTER)
    rect(mouseX, mouseY,50,50)
}

function windowResize() {
    background (255,0,0)
    resizeCanvas
    (windowWidth,
    windowHeight
    )
}