const SIZE = 400;
const MARGIN = 25;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  strokeWeight(1)

  stroke("yellow");
  let i = MARGIN;
  while (i < SIZE-MARGIN) {
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    i += MARGIN;
  }
}

function mouseMoved() {
  background("black");
  strokeWeight(2);


}
