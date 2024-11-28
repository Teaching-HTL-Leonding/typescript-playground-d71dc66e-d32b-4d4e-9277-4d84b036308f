function setup() {
    const SIZE = 500;
    const SQUARE_SIZE = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    let i = SQUARE_SIZE;
    while (i < 450) {
        fill("white");
        rect(i * 2, SQUARE_SIZE * 2, SQUARE_SIZE, SQUARE_SIZE);
        i += 50

        let x = SQUARE_SIZE;
        while (x < 450) {
            fill("white");
            rect(x, SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
            x += SQUARE_SIZE * 2;
        }
        let y = SQUARE_SIZE;
        while (y < 450) {
            fill("brown");
            rect(y * 2, SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
            y += SQUARE_SIZE;
        }
    }
}