function setup() {
    createCanvas(500, 500);
    background("grey");
    textSize(20);
    text("Test 1", 25, 25);
    text("Test 2", 100, 25);
    text("Test 3", 175, 25);
}
function mouseMoved(){
    if(mouseX< 25 && mouseX > 50 &&
     mouseY < 25 && mouseY > 45){
        stroke("black");
        strokeWeight(10)
        line(25, 25, 20, 20);
    }
}
