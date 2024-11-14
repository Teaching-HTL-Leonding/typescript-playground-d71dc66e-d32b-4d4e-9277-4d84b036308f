const SIZE = 400;  
const MARGIN = 25; 

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");


    let i = MARGIN;
    while (i < SIZE) {
        line(i, mouseY, i, mouseX);
        i += MARGIN;
    }
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

 
}
