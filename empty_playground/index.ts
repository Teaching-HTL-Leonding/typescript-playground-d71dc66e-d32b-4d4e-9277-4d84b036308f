let x = 300;
let y = 300;
let speed = 10;
let ySpeed = 0;
let gravity = 0.1;
let ground = 580;
let canvasSize = 400;

let platformX = 150; 
let platformY = 300; 
let platformWidth = 200;
let platformHeight = 20; 
let velocityY = 0; 
let isJumping = 0;


function setup() {
    createCanvas(5000, 600);
}

function draw() {

    background("green");

    ySpeed += gravity;
    y += ySpeed;

    if (y >= ground) {
        y = ground;
        ySpeed = 0;
    }

    if (keyIsPressed) {
        if (key === 'W' || key === 'w') {
            y -= 5;
        }
        if (key === 'A' || key === 'a') {
            x -= 5;
        }
        if (key === 'S' || key === 's') {
            y += 5;
        }
        if (key === 'D' || key === 'd') {
            x += 5;
        }
    }

    textSize(50);
    text("➡️", 200, 100);
    text("⬅️", 100, 100);
    text("⬆️", 150, 50);
    text("⬇️", 150, 100);

    fill("grey");
    rect(250, 380, 100, 20);

    if(y>380){
        
    }

    fill("black");
    ellipse(x, y, 50, 50);
    text("Use W,A,S,D to move arround", 50, 150);
    text("Level 1", 100, 250);
    stroke("black");
    line(0, ground, width, ground-100);
    /*fill("red");
    rect(0, 480, width, 480);
    */
}
