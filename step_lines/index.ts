function setup() {
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
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

    stroke("yellow");
    i = GRID;
    while (i < SIZE) {
        line(GRID, i, GRID * (i / GRID), i);
        i += GRID;
    }

    stroke("red");
    i = GRID;
    while (i < SIZE) {
        line(GRID * (i / GRID), i, SIZE - GRID, i);
        i += GRID;
    }
}