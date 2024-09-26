function setup() {
  createCanvas(500, 500);
  background("lightblue");
}
function mouseMoved() {
  background("lightblue");
  noFill();
  circle(mouseX, mouseY, 20);
  circle(mouseX, mouseY, 50);
  
  rect(mouseX, mouseY, 0, 40);
  rect(mouseX, mouseY, 40, 0);
  rect(mouseX,mouseY, - 40, 0);
  rect(mouseX, mouseY, 0, -40);
}
 