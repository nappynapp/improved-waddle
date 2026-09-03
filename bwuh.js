console.log ("Hello world :D");

function setup() {
    createCanvas(windowWidth,1100)
    strokeWeight(10)
}

function mouseDragged() {
    let lineHue = mouseX - mouseY
    stroke(177, 252,0)
    line(pmouseX, pmouseY, mouseX, mouseY)
}

function draw() {
    
}

function windowResize() {
    background (255,0,0)
    resizeCanvas
    (windowWidth,
    windowHeight)
}