function setup() {
    const dicePointDiameter: number = 30;
    createCanvas(200, 200); 
    background("black"); 

    const dice = Math.floor(random(1, 7));

    noStroke();
    fill("white");

   
    switch (dice) {
        case 1:
            circle(width / 2, height / 2, dicePointDiameter);
            break;
        case 2:
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 3:
            circle(width / 4, height / 4, dicePointDiameter);
            circle(width / 2, height / 2, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 4:
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 5:
            circle(width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(width / 2, height / 2, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
        case 6:
            circle(width / 4, height / 4, dicePointDiameter);
            circle(width / 4, height / 2, dicePointDiameter);
            circle(width / 4, 3 * height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 4, dicePointDiameter);
            circle(3 * width / 4, height / 2, dicePointDiameter);
            circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
            break;
    }
}
