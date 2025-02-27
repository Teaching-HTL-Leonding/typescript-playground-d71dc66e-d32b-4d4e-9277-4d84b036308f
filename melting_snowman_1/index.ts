let numberOfKeypresses = 0;
let wordToGuess= "Winterwald";

function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);
    redraw();
    noLoop(); 
}

function draw() {
    background("white");
    drawSnowman(numberOfKeypresses);

    stroke("blue");
    strokeWeight(3);
    line(200, 200, 250, 200);
    line(260, 200, 310, 200);
    line(320, 200, 370, 200);
    line(380, 200, 430, 200);
    line(440, 200, 490, 200);
    line(200, 200, 250, 200);
    line(200, 200, 250, 200);
    line(200, 200, 250, 200);
    line(200, 200, 250, 200);
    line(200, 200, 250, 200);
}

function keyPressed() {
    numberOfKeypresses++;

    drawSnowman(numberOfKeypresses);
    redraw();
}
