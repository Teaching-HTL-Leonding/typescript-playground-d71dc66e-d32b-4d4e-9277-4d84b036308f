function setup() {
    createCanvas(300, 300)
    background("skyblue");
}

function mouseClicked() {
    triangle(mouseX - 20, mouseY - 10, mouseX,
        mouseY + 10, mouseX + 20, mouseY - 10);


    fill("skyblue");
    noStroke();
    rect(0, height - 20, width / 2, height);
    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
}

function mouseMoved() {

    noStroke();
    fill("gold");
    circle(mouseX, mouseY, 10);
}

