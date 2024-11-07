function setup() {
    createCanvas(400, 400);
    background("black");

    const num1 = Math.floor(random(1, 101));
    const num2 = Math.floor(random(1, 101));
    const num3 = Math.floor(random(1, 101));
    const num4= Math.floor (random(1, 101));
    const num5= Math.floor (random(1, 100));
    const operator= Math.floor(random(0, 3));


    textSize(50);
    fill("yellow");
    text(num1, 50, 230);
    text(num2, 170, 230);
    text(num3, 290, 230);
    text(num4, 120, 100);
    text(num5, 220, 100);
    if( operator===1){
        textSize(50);
        fill("yellow");
        text("*", 190, 100);
    }
    if( operator===2){
        textSize(50);
        fill("yellow");
        text("+", 190, 100)
    }
    if( operator===0){
        textSize(50);
        fill("yellow")
        text("-", 190, 90)
    }
}


function mouseClicked() {

}

function mouseMoved() {
    fill("black");
    noStroke();
    rect(0, height - 20, width, height);

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text(`${mouseX}/${mouseY}`, 5, height - 5);
}
