function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 0;
let circleCenterY = 0;
let directionHorizontal = 2;
let directionVertical = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  fill("aqua");
  circle(width / 2, circleCenterY, circleDiameter);

  circleCenterX += directionHorizontal;
  circleCenterY += directionVertical;

  if (circleCenterX >= width || circleCenterX <= 0) {

    directionHorizontal *= -1;
  }

  if (circleCenterY >= height || circleCenterY <= 0) {
    directionVertical *= -1;
  }
}