const CONFIGURATION = "5;0-360";

let: "50, 50 50, 100, 100 100,"

let lineStartX: number[] = [];
let lineStartY: number[] = [];
let lineEndX: number[] = [];
let lineEndY: number[] = [];
let lineColor: number[] = [];
let lines = 20;

let lineStartDx: number[] = [];
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];
let lineEndDy: number[] = [];

let minColor = 0;
let maxColor = 360;
function setup() {
    createCanvas(500, 500);
    colorMode(HSB);



    for (let x = 0; x < lines; x++) {
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        lineColor.push(random(minColor, maxColor))
    }

}

function draw() {
    background("black");

    strokeWeight(1);
    textSize(20);
    fill("white")
    rect(0, 0, 100, 50);
    fill("black");
    text("+", 25, 10, 0, 50);
    text("-", 70, 10, 0, 50);
   


    for (let i = 0; i < lines; i++) {
        push();
        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDx[i] = -lineStartDx[i];
        }
        if (lineStartY[i] < 0 || lineStartY[i] > height) {
            lineStartDy[i] = -lineStartDy[i];
        }

        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDx[i] = -lineEndDx[i];
        }
        if (lineEndY[i] < 0 || lineEndY[i] > height) {
            lineEndDy[i] = -lineEndDy[i];
        }

        pop();
    }
}
function mouseClicked() {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        lines = lines + 1
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));
    }
    if (mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50) {
        lines = lines - 1
        lineStartY
        lineStartY.splice(lines - 1);
        lineEndX.splice(lines - 1);
        lineEndY.splice(lines - 1);

        lineStartDx.splice(lines);
        lineStartDy.splice(lines);
        lineEndDx.splice(lines);
        lineEndDy.splice(lines);
    }
}

