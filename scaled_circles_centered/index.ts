let canvasMiddle= 200
let canvasmid= 100


function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();

    stroke("blue");
    strokeWeight(3);
    circle(canvasMiddle, canvasMiddle, 50);
    
    push();
    stroke("red");
    scale(2);
    strokeWeight(3 / 2);
    circle(canvasmid, canvasmid, 50);
    pop();
    
    push();
    stroke("green");
    scale(4.0);
    strokeWeight(3 / 4); 
    circle(50, 50, 50);
    pop();
}
