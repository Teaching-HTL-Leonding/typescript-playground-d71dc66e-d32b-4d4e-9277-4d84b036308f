const SIZE = 400; // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
    let i = MARGIN;
  while (i <= SIZE - MARGIN) {
    colorMode(RGB);
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    colorMode(HSB);
    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;}
}

function mouseMoved() {
  background("black");
  strokeWeight(2);


  let i = MARGIN;
  while (i <= SIZE - MARGIN) {
    colorMode(RGB);
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    colorMode(HSB);
    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;
  }
}
