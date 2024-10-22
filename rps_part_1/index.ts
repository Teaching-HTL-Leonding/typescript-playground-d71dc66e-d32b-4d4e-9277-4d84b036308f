const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup(): void {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);
    text("Computer:", TEXT_LEFT, 250);
    textSize(75);
   textSize(75);
   // Auf Windows 10 ist der stein als emoji nicht verfügbar
    text("S", STONE_LEFT, 150);
    text("📃", PAPER_LEFT, 150);
    text("✂️", SCISSORS_LEFT, 150);
    }

function mouseMoved(): void {
    noFill();
    strokeWeight(3);

    
    if (mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow");
        rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }

   
    if (mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
        rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }

    
    if (mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
        rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }
}
