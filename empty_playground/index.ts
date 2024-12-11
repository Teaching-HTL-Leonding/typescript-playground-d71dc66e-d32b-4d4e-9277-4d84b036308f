let x = 300;
let y = 300;
let ySpeed = 0;
let gravity = 0.1;
let ground = 580;
let platformHeight = 20;
let isGameOver = false;

let platforms = [
  { x: 150, y: 400, w: 200 },
  { x: 400, y: 450, w: 150 },
  { x: 550, y: 350, w: 150 },
  { x: 800, y: 450, w: 400 },
    

];

let lavaHeight = 20;

function setup() {
  createCanvas(5000, 600);
}

function draw() {
    fill("grey");
    rect(800, 300, 400, 500);
  background("green");

  if (isGameOver) {
    fill("black");
    textSize(50);
    text("Game Over", width / 2 - 150, height / 2);
    return;
  }

  ySpeed += gravity;
  y += ySpeed;

  if (y + 25 > ground) {
    isGameOver = true;
  }

  for (let platform of platforms) {
    if (
      y + 25 > platform.y &&
      y + 25 < platform.y + platformHeight &&
      x > platform.x &&
      x < platform.x + platform.w &&
      ySpeed > 0
    ) {
      y = platform.y - 25;
      ySpeed = 0;
    }
  }

  if (keyIsPressed) {
    if (key === "w" || key === "W") y -= 5;
    if (key === "a" || key === "A") x -= 5;
    if (key === "d" || key === "D") x += 5;
  }

  fill("grey");
  for (let platform of platforms) {
    rect(platform.x, platform.y, platform.w, platformHeight);
  }

  fill("red");
  rect(0, ground, width, lavaHeight);

  fill("black");
  ellipse(x, y, 50, 50);
}
