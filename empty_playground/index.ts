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
let settings: Settings = { volume: 50 };

let platforms: Platform[] = [];
let goal: Goal = { x: 0, y: 0, w: 50, h: 50 };

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

interface Settings {
    volume: number;
}


function setup() {
    createCanvas(500, 500);
    generateLevel(level);
}

function draw() {
    background("lightblue");
    
    if (gameState === "menu") {
        drawMenu();
    } else if (gameState === "playing") {
        updateGame();
        drawGame();
    } else if (gameState === "levelCompleted") {
        drawLevelCompleted();
    } else if (gameState === "settings") {
        drawSettings();
    } else if (gameState === "levelSelection") {
        drawLevelSelection();
    }
}

function drawMenu() {
    fill("yellow");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Jump 'n' Run", width / 2, height / 4);
    textSize(24);
    text("1 - Spielen", width / 2, height / 2 - 30);
    text("2 - Level", width / 2, height / 2);
    text("3 - Einstellungen", width / 2, height / 2 + 30);
}

function drawSettings() {
    fill("green");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Einstellungen", width / 2, height / 4);
    textSize(24);
    text("Lautstärke: " + settings.volume, width / 2, height / 2);
    text("1 - Erhöhen", width / 2, height / 2 + 30);
    text("2 - Verringern", width / 2, height / 2 + 60);
    text("3 - Zurück", width / 2, height / 2 + 90);
}

function drawLevelSelection() {
    fill("orange");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Level Auswahl", width / 2, height / 4);
    for (let i = 1; i <= 5; i++) {
        text(`Level ${i}`, width / 2, height / 2 + i * 30 - 60);
    }
    text("Drücke eine Nummer um ein Level zu wählen", width / 2, height - 50);
}

function drawLevelCompleted() {
    fill("purple");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Level abgeschlossen!", width / 2, height / 4);
    textSize(24);
    text("1 - Nächstes Level", width / 2, height / 2 - 30);
    text("2 - Wiederholen", width / 2, height / 2);
    text("3 - Hauptmenü", width / 2, height / 2 + 30);
}

function keyPressed() {
    if (gameState === "menu") {
        if (key === '1') startGame(1);
        if (key === '2') gameState = "levelSelection";
        if (key === '3') gameState = "settings";
    } else if (gameState === "levelCompleted") {
        if (key === '1') startGame(level + 1);
        if (key === '2') startGame(level);
        if (key === '3') gameState = "menu";
    } else if (gameState === "settings") {
        if (key === '1') settings.volume = min(settings.volume + 10, 100);
        if (key === '2') settings.volume = max(settings.volume - 10, 0);
        if (key === '3') gameState = "menu";
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
    
    if (playerY > height) {
        startGame(level);
    }
}

function drawGame() {
    fill("blue");
    ellipse(playerX, playerY, 50, 50);
    
    fill("red");
    for (let platform of platforms) {
        rect(platform.x + offsetX, platform.y, platform.w, platform.h);
    }
    
    fill("gold");
    rect(goal.x + offsetX, goal.y, goal.w, goal.h);
}
