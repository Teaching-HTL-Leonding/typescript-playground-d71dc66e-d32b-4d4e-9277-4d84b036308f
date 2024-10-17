function setup() {
  createCanvas(1000, 1000);
  background("Black");
  stroke("yellow");
  noFill()
  rect(50, 100, 50, 100);
  rect(120, 100, 50, 100);
  rect(190, 100, 50, 100);
  rect(260, 100, 50, 100);
  rect(330, 100, 50, 100);
  rect(400, 100, 50, 100);

  const num = Math.floor(random(0, 1_000_000));
  const digit1 = num % 10;
  const digit2 = Math.floor(num / 10) % 10
  const digit3 = Math.floor(num / 100) % 10
  const digit4 = Math.floor(num / 1000) % 10
  const digit5 = Math.floor(num / 10000) % 10
  const digit6 = Math.floor(num / 100000) % 10

  textAlign(CENTER, CENTER)
  fill("yellow");
  noStroke();

  text(num, width / 2, height / 2)
  textSize(30);

  text(digit1, 75 + 0 * 75, 100 + 75 / 2);
  text(digit2, 75 + 1 * 75, 100 + 75 / 2);
  text(digit3, 75 + 2 * 75, 100 + 75 / 2);
  text(digit4, 75 + 4 * 75, 100 + 75 / 2);
  text(digit5, 75 + 5 * 75, 100 + 75 / 2);
  text(digit6, 75 + 6 * 75, 100 + 75 / 2);
}

