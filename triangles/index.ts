
function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();

    for (let y = 0; y <= SIZE; y += HEIGHT) {
        push();
        for (let x = 0; x <= SIZE; x += SIDE_LENGTH) {
            triangle(0, 0, SIDE_LENGTH / 2, -HEIGHT, SIDE_LENGTH, 0);
            translate(SIDE_LENGTH, 0); // Move origin to the right
        }

      
        pop();

       
        translate(0, HEIGHT);
    }
}