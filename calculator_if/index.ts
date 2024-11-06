const MARGIN_NUM = 10;

let num: number = 0;
let lineHeight: number = 0;
let cellWidth: number = 0;

function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;
    background("lightgray");
    strokeWeight(3);
    // die zwei linien
    line(200, 500, 200, 100);
    line(100, 400, 100, 100);
    //linien von links nach rechts
    line(0, 100, 300, 100);
    line(0, 200, 300, 200);
    line(0, 300, 300, 300);
    line(0, 400, 300, 400);
    textSize(50);
    fill("black");
    text("7", 35, 160);
    text("8", 135, 160);
    text("9", 235, 160);
    text("4", 35, 260);
    text("5", 135, 260);
    text("6", 235, 260);
    text("1", 35, 360);
    text("2", 135, 360);
    text("3", 235, 360);
    text("0", 90, 460);
    text("C", 235, 460);
    fill("white");
    rect(30, 20, 230, 50);
    let zahlsieben: number = 7;
}

function mouseClicked() {
    // tip für mich: alle  Y koordinaten müssen einfach
     //+100 gerechnet wereden
    if (mouseX > 0 && mouseX < 100 &&
        mouseY > 100 && mouseY < 200) {
        fill("black");
        text("7", 230, 60);
    }
    if (mouseX > 100 && mouseX < 200
        && mouseY > 100 && mouseY <200) {
        fill("black");
        text("8", 230, 60);
    }
    if (mouseX > 200 && mouseX < 300
    && mouseY > 100 && mouseY < 200){
        fill("black");
        text("9", 230, 60);
    }
    if( mouseX > 0 && mouseX < 100 
    && mouseY > 200 && mouseY < 300){
        fill("black");
        text("4", 230, 60);
    }
    if(mouseX > 100 && mouseX < 200
    && mouseY > 200 && mouseY < 300){
        fill("black");
        text("5", 230, 60);
    }
    if(mouseX > 200 && mouseX < 300 
    && mouseY > 200 && mouseY < 300){
        fill("black");
        text("6", 230, 60);
    }
    if(mouseX > 0 && mouseX < 100 
    && mouseY > )


}
