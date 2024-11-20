function setup() {
    const SIZE = 500;
    const SQUARE_SIZE = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i= SQUARE_SIZE;
    while(i<SIZE){
        fill("white");
        rect(i, i, SIZE-100 , i-50);
        i+= 50;
    }
     let x= SQUARE_SIZE;
    while(x<SIZE){
        fill("brown");
        rect(x*2, x, SIZE-100, x-50);

        x+= SIZE;
    }
  
}
