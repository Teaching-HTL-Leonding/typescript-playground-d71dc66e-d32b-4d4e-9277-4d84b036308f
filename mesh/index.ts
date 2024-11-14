const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
 

  let i=MARGIN;
  while (i<MARGIN){
    stroke("lime");
    rect(50, MARGIN, i, SIZE);
    i+=50;
  }
}
