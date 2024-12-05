function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
     fill("black");
    rect(0, 280, 601, 25);
}


function mouseMoved() {


    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");

   

    let height1 = 0
    let height2 = 5

    for (let i = 0; i < 601; i++) {
        for (let x = 0; x < 301; x++) {
            colorMode(HSB);
            line(0, height1, 10, height2);
            line(10, height2, 0, height1+10);
            height1 += 10
            height2 += 10
        }
        translate(10, 0);
        height1 = 0
        height2 = 5
    }
    resetMatrix();
     fill("black");
    rect(0, 280, 601, 25);
    fill("white");
    textAlign(CENTER, LEFT);
    textSize(20);
    text (`$(mouseX of 601)$`, 100, 200)
    }



