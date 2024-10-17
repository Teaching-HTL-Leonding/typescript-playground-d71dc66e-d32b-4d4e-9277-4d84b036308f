function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("Blue");
    rect(0, 100, 200, 100);
    fill("Green");
    rect(200, 100, 200, 100);
    fill("Red");
    rect(200, 0, 200, 100);
    fill("Yellow");
    rect(0, 0, 200, 100);
    fill("Black");
    rect(120, 80, 150, 50);
}
function mouseClicked() {
    fill("Black");
    rect(120, 80, 150, 50);
    if (mouseX < 200 && mouseY < 100) {
        fill("White");
        textSize(30);
        text("Yellow", 150, height / 2);
    }

    else if (mouseX < 100 && mouseY < 200) {
        fill("white");
        textSize(30);
        text("Blue", 150, height / 2);

    }
else if ( mouseX >= 200 && mouseY >= 100){
    fill("White");
    textSize(30);
    text("Green", 150, height/2);
}
else if (mouseX >= 200 && mouseY <= 200){
    fill("white");
    textSize(30);
    text("Red", 150, height/2)
}}

