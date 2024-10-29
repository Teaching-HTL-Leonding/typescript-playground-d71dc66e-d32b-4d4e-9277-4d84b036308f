const MARGIN_NUM = 10;

let num: number = 0;
let lineHeight: number = 0;
let cellWidth: number = 0;

//cellWidth=breite
//lineHeight=länge

function setup() {
    createCanvas(300, 450);
    background("lightgray");
    lineHeight = height / 5;
    cellWidth = width / 3;
    fill("white");
    strokeWeight(3);
    rect(10, 10, width - 20, lineHeight - 20);
    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2);
    line(0, lineHeight * 3, width, lineHeight * 3);
    line(0, lineHeight * 4, width, lineHeight * 4);
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4);
    line(cellWidth * 2, lineHeight, cellWidth * 2, lineHeight * 5);
    fill("black");
    textSize(75);
    text("7", cellWidth / 4, lineHeight * 1.8);
    text("8", cellWidth / 0.8, lineHeight * 1.8);
    text("9", cellWidth / 0.45, lineHeight * 1.8);
    text("6", cellWidth / 4, lineHeight * 2.8);
    text("5", cellWidth / 0.8, lineHeight * 2.8);
    text("4", cellWidth / 0.45, lineHeight * 2.8);
    text("3", cellWidth / 4, lineHeight * 3.8);
    text("2", cellWidth / 0.8, lineHeight * 3.8);
    text("1", cellWidth / 0.45, lineHeight * 3.8);
    text("0", cellWidth / 1.2, lineHeight * 4.8);
    text("C", cellWidth / 0.45, lineHeight * 4.8);

}

function draw() {

}
function mouseClicked() {
    if (mouseX > 0 && mouseX < cellWidth
        && mouseY > lineHeight && mouseY < lineHeight * 2) {
        num = 7;
    }

    if (mouseX > cellWidth && mouseX < cellWidth * 2
        && mouseY > lineHeight && mouseY < lineHeight * 2) {
        num = 8;
    }

    if (mouseX > cellWidth * 2 && mouseX < width
        && mouseY > lineHeight && mouseY < lineHeight * 2) {
        num = 9;
    }

    if (mouseX > 0 && mouseX < cellWidth &&
        mouseY > lineHeight * 2 && mouseY < lineHeight * 3) {
        num = 6;
    }

    if(mouseX > cellWidth/2 && cellWidth/3 &&
    mouseY > lineHeight/3 && mouseY < lineHeight*4){
        num=5
    }

    if(mouseX > cellWidth/3 && mouseX < cellWidth/4
    && mouseY > lineHeight*4 && mouseY < lineHeight/4 ){
        num = 4
    }


    textSize(40);
    textAlign(CENTER, CENTER);
    text(num, width / 2, lineHeight / 2);
}
