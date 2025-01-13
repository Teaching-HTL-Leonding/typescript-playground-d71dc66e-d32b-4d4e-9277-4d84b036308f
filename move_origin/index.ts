function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  for(let i=0; i<400; i+= CIRCLE_DIAMETER){
  strokeWeight(3);
  stroke("yellow");
  noFill();

  circle(i, i, CIRCLE_DIAMETER);
  }


 
}
