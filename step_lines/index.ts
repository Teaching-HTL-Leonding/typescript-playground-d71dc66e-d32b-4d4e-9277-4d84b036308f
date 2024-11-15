function setup() {
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");


    for (let i = GRID; i < SIZE; i += GRID) {
        line(i, 0, i, SIZE);
    }

    
    for(let y=GRID; y < SIZE; y+= GRID) {
        line(0, y, SIZE, y);
    }

    strokeWeight(2);

    stroke("yellow");
    
    for (let j = GRID; j < SIZE; j += GRID) {
        line(GRID, j, GRID * (j / GRID), j);
        
    }

    stroke("red");
    
    for (let x = GRID; x< SIZE; x += GRID ) {
        line(GRID * (x / GRID), x, SIZE - GRID, x);
       
    }
}