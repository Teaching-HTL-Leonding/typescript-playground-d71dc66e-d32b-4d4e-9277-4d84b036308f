function setup() {
    createCanvas(400, 400);
    background("black");

    
}


function mouseClicked() {
    
}

function mouseMoved() {
    fill("black");
    noStroke();
    rect(0, height - 20, width, height);

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); 
    text(`${mouseX}/${mouseY}`, 5, height - 5);
}
