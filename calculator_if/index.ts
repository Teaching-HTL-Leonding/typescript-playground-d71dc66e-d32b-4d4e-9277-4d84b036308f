const MARGIN_NUM = 10;

let num: number = 0;
let lineHeight: number = 0;
let cellWidth: number = 0;

function setup() {
    createCanvas(300, 450);
    background("lightgray");
    lineHeight = height / 5;
    cellWidth = width / 3;
    fill("white");
    strokeWeight(3);
    rect(30, 30, 250, 50);
    line(0, 100, 300, 100);
    line(0, 200, 500, 200);
    line(0, 300, 700, 300);
    line(100, 300, 100, 100);
    line(200, 450, 200, 100);
    strokeWeight(100)
    fill("black");
    text("1", 100, 150, 200);
}

function draw() {


    // <<< Add code here
}

function mouseClicked() {
    // <<< Add code here
}
