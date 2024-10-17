function setup() {
    createCanvas(400, 200);
}

function draw() {
    fill(255, 0, 0);
    rect(0, 0, 133.33, 200);
    
    fill(0, 255, 0);
    rect(133.33, 0, 133.33, 200);
    
    fill(0, 0, 255);
    rect(266.66, 0, 133.33, 200);
    
    fill(0);
    rect(0, 150, 400, 50);
    
    if (message) {
        fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text(message, width / 2, 175);
    }
}

let message: string = "";

function mousePressed() {
    if (mouseX < 133.33) {
        message = ("Red");
    } else if (mouseX < 266.66) {
        message = ("Green");
    } else {
        message = ("Blue");
    }
}
