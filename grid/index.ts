function setup() {
    // We have a square canvas. The side length is defined by the constant SIZE.
    const SIZE = 400;
    // Your job is to draw a grid on the canvas. The distance between the grid lines is defined by the constant GRID.
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    for(let i = GRID; i<SIZE; i++){
        line(i, 0, i, SIZE); 
        i += GRID;
    }
    for(let i = GRID; i<SIZE; i++){
        line(0, i, SIZE, i); 
        i += GRID;
    }
    
   

    
}
