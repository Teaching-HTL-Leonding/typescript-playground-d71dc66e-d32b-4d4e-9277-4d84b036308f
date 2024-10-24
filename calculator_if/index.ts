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
    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2);
    line(0, lineHeight * 3, width, lineHeight * 3);
    line(0, lineHeight * 4, width, lineHeight * 4);
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4);
    line(cellWidth * 2, lineHeight, cellWidth * 2, lineHeight * 5);
    fill("black");
    textSize(75);
    text("7", 30, 100, 200);
    text("8", 130, 100, 200);
    text("9", 230, 100, 200);
    text("6", 230, 200, 200);
    text("5", 130, 200, 100);
    text("4", 30, 200, 100);
    text("3", 230, 280, 150);
    text("2", 130, 280, 150);
    text("1", 30, 280, 150);
    text("0", 80, 380, 200);
    text("C", 230, 380, 200);

}

function draw() {


    // <<< Add code here
}

function mouseClicked() {
    // <<< Add code here
}