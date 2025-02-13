let circleY = 50;
let circleX = 250;
let velocity = 0;
let gravity = 0.5;
let jumpPower = -10;
let speed = 5;
let onGround = false;
let offsetX = 0;

let platforms = [
    { x: 0, y: 400, w: 150, h: 10 },
    { x: 250, y: 350, w: 150, h: 10 },
    { x: 500, y: 300, w: 150, h: 10 },
    { x: 750, y: 250, w: 150, h: 10 },
    { x: 1000, y: 200, w: 150, h: 10 }
];

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("grey");
    
    // Gravitation anwenden
    velocity += gravity;
    circleY += velocity;
    
    // Bewegung mit KeyIsPressed
    if (keyIsPressed) {
        if (key === 'a') { // A - links
            circleX -= speed;
        }
        if (key === 'd') { // D - rechts
            circleX += speed;
        }
        if (key === ' ' && onGround) { // Leertaste - springen
            velocity = jumpPower;
        }
    }
    
    // Bildschirmbewegung anpassen
    if (circleX > width - 100) {
        offsetX -= speed;
        circleX = width - 100;
    } else if (circleX < 100) {
        offsetX += speed;
        circleX = 100;
    }
    
    // Boden Kollisionsprüfung
    if (circleY >= height - 25) {
        circleY = height - 25;
        velocity = 0;
        onGround = true;
    } else {
        onGround = false;
    }
    
    // Plattform Kollisionsprüfung
    for (let platform of platforms) {
        let adjustedX = platform.x + offsetX;
        if (
            circleX > adjustedX && 
            circleX < adjustedX + platform.w && 
            circleY + 25 >= platform.y && 
            circleY + 25 <= platform.y + platform.h + velocity
        ) {
            circleY = platform.y - 25;
            velocity = 0;
            onGround = true;
        }
    }
    
    // Kreis zeichnen
    fill("black");
    circle(circleX, circleY, 50);
    
    // Plattformen zeichnen
    fill("brown");
    for (let platform of platforms) {
        rect(platform.x + offsetX, platform.y, platform.w, platform.h);
    }
}
