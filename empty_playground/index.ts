function setup() {
    createCanvas(400, 400);
    background("black");
    for (let i = 0; i < 3; i++) {
        drawCircle("yellow", "lime");
    }

}

function mouseClicked() {
    for (let i = 0; i < 3; i++) {
        drawCircle("lime", "yellow");

    }
}

function drawCircle(color: string, colorStroke : string) {
    stroke(colorStroke);
    strokeWeight(4);
    fill(color);
    let x = random(0, 400);
    let y = random(0, 400);
    let diameter = random(50, 250);
    circle(x, y, diameter);
}
