const SIZE = 400;  
const MARGIN = 50; 
const COLOR_HUE_OFFSET = 60;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  colorMode(RGB);

  let left = MARGIN;
  let color = 0;
  while (left <= SIZE - MARGIN) {
    stroke(color, 100, 100);
    let right = MARGIN;
    while (right <= SIZE - MARGIN) {
      line(MARGIN, left, width - MARGIN, right);
      right += MARGIN;
    }

    left += MARGIN;
    color = color + COLOR_HUE_OFFSET;
  }
}

