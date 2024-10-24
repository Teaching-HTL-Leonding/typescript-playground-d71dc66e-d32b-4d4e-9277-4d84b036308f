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
    line(0, lineHeight*2, width, lineHeight*2);
    line(0, lineHeight*3, width, lineHeight*3);
    line(0, lineHeight*4, width, lineHeight*4);
    line(cellWidth, lineHeight, cellWidth, lineHeight*4);
    line(cellWidth*2, lineHeight, cellWidth*2, lineHeight*5);
    fill("black");
    
    text("7", 50, 130, 200);
    text("8", 150, 130, 200);
    text("9", 250, 130, 200);
    text("6", 250, 220, 100)
}

function draw() {


    // <<< Add code here
}

function mouseClicked() {
    // <<< Add code here
}