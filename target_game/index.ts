let dragging = false;
const smallradius = 50;
const largeradius = 70;
let smallcircley = 0
let smallcirclex = 0
let largecriclex = 0
let largecricley = 0
let interval;
let score = 0





function setup() {
  createCanvas(800, 600);
  smallcirclex = findRandomXPos(smallradius);
  smallcircley = findrandomYpos(smallradius);
  largecricley = findrandomYpos(largeradius);
  largecriclex = findrandomYpos(largeradius);
    interval = setInterval(endgame, 1000);

  while (circleInCircle(smallcirclex, smallcircley, smallradius, largecriclex, largecricley, largeradius)) {
    smallcirclex = findRandomXPos(smallradius);
    smallcircley = findrandomYpos(smallradius);
    largecriclex = findRandomXPos(largeradius);
    largecricley = findrandomYpos(largeradius);

  }
}

function findRandomXPos(radius: number): number {
  const randomX = random(radius, width - radius);
  return randomX;
}
function findrandomYpos(radius: number): number {
  const randomY = random(radius, height - radius);
  return randomY;
}

function circleInCircle(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  const dx = x1 - x2
  const dy = y1 - y2
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance + r1 < r2
}

function endgame() {
 
}


function draw() {
  background("lightgray");
  fill("lightblue");
  circle(smallcirclex, smallcircley, smallradius * 2)
  noFill();
  circle(largecriclex, largecricley, largeradius * 2)
}

function mousePressed() {
  dragging = isInRadius(mouseX, mouseY, smallcirclex, smallcircley)
}

function mouseDragged() {
  if (dragging) {
    smallcirclex = mouseX
    smallcircley = mouseY
  }
}

function mouseReleased() {
  dragging = false
  if (circleInCircle(smallcirclex, smallcircley, smallradius, largecriclex, largecricley, largeradius)) {
    largecriclex = findRandomXPos(largeradius);
    largecricley = findrandomYpos(largeradius);
    score++
  }
}

function isInRadius(mx: number, my: number, x: number, y: number): boolean {
  const dx = mx - x
  const dy = my - y
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance < smallradius
}

function circleTouchesCircle(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  return distance (x1, y1, x2, y2) < r1+r2
}

function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2
  const dy = y1 -y2
  return Math.sqrt(dx * dx + dy*dy);
}
