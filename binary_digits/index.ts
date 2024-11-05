function setup() {
  createCanvas(500, 500);
  background("black");
  strokeWeight(3);
  stroke("yellow");
  fill("black");
  rect(50, 100, 50, 80);
  noStroke();
  fill("yellow");
  text(erstezahl, 73, 140);
  noFill();
  stroke("yellow");
  rect(120, 100, 50, 80);
  noStroke();
  fill("yellow");
  text(zweitezahl, 143, 140);
  noFill();
  stroke("yellow");
  rect(190, 100, 50, 80);
  rect(260, 100, 50, 80);
  rect(330, 100, 50, 80);
  rect(400, 100, 50, 80);
}

let erstezahl: number = 1;
let zweitezahl: number = 1;
let drittezahl: number = 0;
let viertezahl: number = 1;
let fuenftezahl: number = 0;
let sechstezahl: number = 0;

function mouseClicked() {
  if (mouseX > 50 && mouseX < 100 && mouseY > 100 && mouseY < 180) {
    if (erstezahl == 1) {
      strokeWeight(3);
      stroke("yellow");
      fill("black");
      rect(50, 100, 50, 80);

      erstezahl = 0;
      noStroke();
      fill("yellow");
      text(erstezahl, 73, 140);
    }
    else {
      strokeWeight(3);
      stroke("yellow");
      fill("black");
      rect(50, 100, 50, 80);

      erstezahl = 1;
      noStroke();
      fill("yellow");
      text(erstezahl, 73, 140);
    }
  }
 else{
   if (mouseX > 120 && mouseX < 170 && mouseY > 100 && mouseY < 180) {
    if(zweitezahl== 1)
      strokeWeight(3);
      stroke("yellow");
      fill("black");
    rect(120, 100, 50, 80);
    noStroke();
    fill("yellow");
    zweitezahl = 0;
    text(zweitezahl, 143, 140);
  }
  else {
      strokeWeight(3);
      stroke("yellow");
      fill("black");
      rect(120, 100, 50, 80);

      zweitezahl = 1;
      noStroke();
      fill("yellow");
      text(zweitezahl, 143, 140);
    }
 }

}