const INITIAL_FILL = [3, 7, 8, 3, 10, 2];
const SILO_MAX = 10;
const CRITICAL_FILL = 5;

let silos = [...INITIAL_FILL];

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background("black");
  fill("black")
  rect(0, 300, 500, 300);

  for (let i = 0; i < silos.length; i++) {
    let x = i * 70 + 50;

    fill(255);
    rect(x, 100, 50, 150);

    if (silos[i] <= CRITICAL_FILL) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    let fillHeight = map(silos[i], 0, SILO_MAX, 0, 150);
    rect(x, 250 - fillHeight, 50, fillHeight);

    fill(255);
    textAlign(CENTER);
    text(silos[i], x + 25, 270);

    fill(200);
    rect(x, 60, 20, 20);
    fill(0);
    text("+", x + 10, 75);

    fill(200);
    rect(x + 30, 60, 20, 20);
    fill(0);
    text("-", x + 40, 75);
  }
}

function mousePressed() {
  for (let i = 0; i < silos.length; i++) {
    let x = i * 70 + 50;

    if (mouseX > x && mouseX < x + 20 && mouseY > 60 && mouseY < 80) {
      silos[i] = constrain(silos[i] + 1, 0, SILO_MAX);
    }

    if (mouseX > x + 30 && mouseX < x + 50 && mouseY > 60 && mouseY < 80) {
      silos[i] = constrain(silos[i] - 1, 0, SILO_MAX);
    }
  }
}
