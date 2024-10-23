function setup() {
    const dicePointDiameter: number = 30; // Durchmesser der Punkte
    createCanvas(200, 200); // Größe des Canvas
    background("black"); // Hintergrundfarbe

    const dice = Math.floor(random(1, 7)); // Zufällige Zahl zwischen 1 und 6

    noStroke(); // Keine Kontur für die Kreise
    fill("white"); // Farbe der Punkte

    // Punkte je nach geworfener Zahl zeichnen
    switch (dice) {
        case 1:
            // Für die 1: einen Punkt in der Mitte
            circle(width / 2, height / 2, dicePointDiameter);
            break;
        case 2:
            // Für die 2: zwei Punkte diagonal
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 3:
            // Für die 3: drei Punkte
            circle(width / 4, height / 4, dicePointDiameter);
            circle(width / 2, height / 2, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 4:
            // Für die 4: vier Punkte in zwei Reihen
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 5:
            // Für die 5: fünf Punkte
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(width / 2, height / 2, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 6:
            // Für die 6: sechs Punkte in zwei vertikalen Reihen
            circle(width / 4, height / 4, dicePointDiameter);
            circle(width / 4, height / 2, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 2, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
    }
}
