function setup() {
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    i = GRID;
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    stroke("red");
    //oberste line
    i = GRID;
    while (i < SIZE) {
        line(25, 25, 375, 25);
        i += GRID;
    }
    //zweite line
    i = GRID;
    while (i < SIZE) {
        line(50, 50, 375, 50);
        i += GRID;
    }
    //dritte line
    i = GRID;
    while (i < SIZE) {
        line(75, 75, 375, 75);
        i += GRID;
    }
    //vierte line
    i = GRID;
    while (i < SIZE) {
        line(100, 100, 375, 100);
        i += GRID;
    } 
    //fünfte line
    i = GRID;
    while (i < SIZE) {
        line(125, 125, 375, 125);
        i += GRID;
    } 
    //sechste line
    i = GRID;
    while (i < SIZE) {
        line(150, 150, 375, 150);
        i += GRID;
    } 
    //siebte line
    i = GRID;
    while (i < SIZE) {
        line(175, 175, 375, 175);
        i += GRID;
    } 
    //achte line
    i = GRID;
    while (i < SIZE) {
        line(200, 200, 375, 200);
        i += GRID;
    } 
    //neunte line
    i = GRID;
    while (i < SIZE) {
        line(225, 225, 375, 225);
        i += GRID;
    } 
    //10te line
    i = GRID;
    while (i < SIZE) {
        line(250, 250, 375, 250);
        i += GRID;
    } 
    //11te line
    i = GRID;
    while (i < SIZE) {
        line(275, 275, 375, 275);
        i += GRID;
    } 
    //12te line
    i = GRID;
    while (i < SIZE) {
        line(300, 300, 375, 300);
        i += GRID;
    } 
    //13te line
    i = GRID;
    while (i < SIZE) {
        line(325, 325, 375, 325);
        i += GRID;
    } 
    //14te line
    i = GRID;
    while (i < SIZE) {
        line(350, 350, 375, 350);
        i += GRID;
    }

    stroke("yellow");
        
    //zweite line
    i = GRID;
    while (i < SIZE) {
        line(25, 50, 50, 50);
        i += GRID;
    }
    //dritte line
    i = GRID;
    while (i < SIZE) {
        line(25, 75, 75, 75);
        i += GRID;
    }
    //vierte line
    i = GRID;
    while (i < SIZE) {
        line(25, 100, 100, 100);
        i += GRID;
    } 
    //fünfte line
    i = GRID;
    while (i < SIZE) {
        line(25, 125, 375, 125);
        i += GRID;
    } 
    //sechste line
    i = GRID;
    while (i < SIZE) {
        line(25, 150, 375, 150);
        i += GRID;
    } 
    //siebte line
    i = GRID;
    while (i < SIZE) {
        line(25, 175, 375, 175);
        i += GRID;
    } 
    //achte line
    i = GRID;
    while (i < SIZE) {
        line(25, 200, 375, 200);
        i += GRID;
    } 
    //neunte line
    i = GRID;
    while (i < SIZE) {
        line(25, 225, 375, 225);
        i += GRID;
    } 
    //10te line
    i = GRID;
    while (i < SIZE) {
        line(25, 250, 375, 250);
        i += GRID;
    } 
    //11te line
    i = GRID;
    while (i < SIZE) {
        line(25, 275, 375, 275);
        i += GRID;
    } 
    //12te line
    i = GRID;
    while (i < SIZE) {
        line(25, 300, 375, 300);
        i += GRID;
    } 
    //13te line
    i = GRID;
    while (i < SIZE) {
        line(25, 325, 375, 325);
        i += GRID;
    } 
    //14te line
    i = GRID;
    while (i < SIZE) {
        line(25, 350, 375, 350);
        i += GRID;
    }



}
