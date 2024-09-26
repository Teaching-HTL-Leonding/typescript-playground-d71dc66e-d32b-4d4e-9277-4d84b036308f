function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40;
  const markerSize = 10;
  background("lightblue");
  const x: number = Math.round(mouseX / 40) * 40;
  const y: number = Math.round(mouseY / 40) * 40;
  rect(x, y, 0, 20);
  rect(x, y, 20, 0);
  rect(x, y, -20, 0);
  rect(x, y, 0, -20);
}
