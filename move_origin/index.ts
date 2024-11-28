function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(3);
  stroke("yellow");
  noFill();

  
  for (let x= CIRCLE_DIAMETER; x <SIZE; x+= 30){
    stroke("yellow");
    circle(0, 0, 50);
    
    translate(CIRCLE_DIAMETER, 50);
  }
}

