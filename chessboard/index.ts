function setup() {
    const SIZE = 500;
    const SQUARE_SIZE = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    let i = SQUARE_SIZE;
    let row = 0;

    while (i < 450) {

        let x = SQUARE_SIZE;
        for (let x = SQUARE_SIZE; x < 450; x += SQUARE_SIZE * 2) {
            if (row % 2 === 0) {
                fill("white");
            }
            else {
                fill("brown");
            }
            rect(x, i, SQUARE_SIZE, SQUARE_SIZE);
            
        }
        
        for(let y = SQUARE_SIZE; y < 450;  y += SQUARE_SIZE) {
            if (row % 2 === 1) {
                fill("white");
            }
            else {
                fill("brown");
            }
            rect(y * 2, i, SQUARE_SIZE, SQUARE_SIZE);
            
        }
        i += SQUARE_SIZE;
        
    }
}