const MAX_WRONG_GUESSES = 10;
const wordToGuess = "Winterwald";
let currentWordStatus: string;
let font: any;
let wrongGuesses = 0;
let acceptKeys = true;

function preload() {
    font = loadFont("https://cddataexchange.blob.core.windows.net/images/SyneMono-Regular.ttf");
}

function setup() {
    currentWordStatus = getInitialCurrentWord(wordToGuess);

    createCanvas(800, 500);
    angleMode(DEGREES);

    redraw();
    noLoop(); 
}

function draw() {
    background("white");

    if (currentWordStatus === wordToGuess) {
        acceptKeys = false;
        drawResult(true, wrongGuesses);
    } else if (wrongGuesses === MAX_WRONG_GUESSES) {
        acceptKeys = false;
        drawResult(false, wrongGuesses);
    } else {
        drawSnowman(wrongGuesses);
        drawCurrentWordStatus(font, currentWordStatus);
    }

}

function keyPressed() {
    if (!acceptKeys) { return; }

    // Handle guess
    const newCurrentWordStatus = guessKey(key, wordToGuess, currentWordStatus);
    if (currentWordStatus === newCurrentWordStatus) {
        wrongGuesses++;
    }
    currentWordStatus = newCurrentWordStatus;

    redraw();
}

function drawCurrentWordStatus(font: any, currentWordStatus: string) {
    push();
    textAlign(LEFT, BOTTOM);
    translate(225, 0);

    // Draw current word status
    fill("dodgerblue");
    noStroke();
    textSize(45);
    textFont(font);
    text(currentWordStatus, 0, 250);
    pop();
}
