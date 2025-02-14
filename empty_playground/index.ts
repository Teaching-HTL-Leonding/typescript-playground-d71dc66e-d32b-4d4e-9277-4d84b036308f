interface Platform {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface Goal {
    x: number;
    y: number;
    w: number;
    h: number;
}

let playerY: number = 50;
let playerX: number = 250;
let velocity: number = 0;
let gravity: number = 0.5;
let jumpPower: number = -10;
let speed: number = 5;
let onGround: boolean = false;
let offsetX: number = 0;
let level: number = 1;
let gameState: string = "menu";

let platforms: Platform[] = [];
let goal: Goal = { x: 0, y: 0, w: 50, h: 50 };
let playerImg: p5.Image;
let bgImg: p5.Image;

function preload() {
    playerImg = loadImage("https://i.imgur.com/OqXq5Nk.png"); // Beispiel: Charakter-Bild
    bgImg = loadImage("https://i.imgur.com/ZLZ6pC8.jpg"); // Beispiel: Hintergrundbild
}

function setup() {
    createCanvas(500, 500);
    generateLevel(level);
}

function draw() {
    background(bgImg);
    
    if (gameState === "menu") {
        drawMenu();
    } else if (gameState === "playing") {
        updateGame();
        drawGame();
    }
}

function drawMenu() {
    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Select Level", width / 2, height / 4);
    textSize(24);
    text("Press 1, 2, or 3 to Start", width / 2, height / 2);
}

function keyPressed() {
    if (gameState === "menu") {
        if (key === '1') startGame(1);
        if (key === '2') startGame(2);
        if (key === '3') startGame(3);
    }
}

function startGame(selectedLevel: number) {
    level = selectedLevel;
    gameState = "playing";
    generateLevel(level);
}

function generateLevel(level: number) {
    offsetX = 0;
    playerX = 250;
    playerY = 50;
    velocity = 0;
    platforms = [];
    let prevX = 0;
    let prevY = 450;
    
    for (let i = 0; i < 6; i++) {
        let x = prevX + random(150, 250);
        let y = prevY - random(50, 100);
        platforms.push({ x, y, w: 150, h: 10 });
        prevX = x;
        prevY = y;
    }
    goal = { x: prevX + 200, y: prevY - 50, w: 50, h: 50 };
}

function updateGame() {
    velocity += gravity;
    playerY += velocity;
    onGround = false;
    
    if (keyIsPressed) {
        if (key === 'a') playerX -= speed;
        if (key === 'd') playerX += speed;
        if ((key === ' ' || key === 'w') && onGround) velocity = jumpPower;
    }
    
    if (playerX > width - 100) {
        offsetX -= speed;
        playerX = width - 100;
    } else if (playerX < 100) {
        offsetX += speed;
        playerX = 100;
    }
    
    for (let platform of platforms) {
        let adjustedX = platform.x + offsetX;
        if (
            playerX > adjustedX && 
            playerX < adjustedX + platform.w && 
            playerY + 25 >= platform.y && 
            playerY + velocity < platform.y + 10
        ) {
            playerY = platform.y - 25;
            velocity = 0;
            onGround = true;
        }
    }
    
    if (playerY >= height - 25) {
        playerY = height - 25;
        velocity = 0;
        onGround = true;
    }
    
    let adjustedGoalX = goal.x + offsetX;
    if (
        playerX > adjustedGoalX && 
        playerX < adjustedGoalX + goal.w && 
        playerY > goal.y && 
        playerY < goal.y + goal.h
    ) {
        level++;
        generateLevel(level);
    }
}

function drawGame() {
    image(playerImg, playerX - 25, playerY - 25, 50, 50);
    
    fill("brown");
    for (let platform of platforms) {
        rect(platform.x + offsetX, platform.y, platform.w, platform.h);
    }
    
    fill("gold");
    rect(goal.x + offsetX, goal.y, goal.w, goal.h);
}
