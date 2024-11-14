function setup() {
    const SIZE = 400; 
    const STRIPE_THICKNESS = 50; 

    createCanvas(SIZE, SIZE);
    background("black");

    let i=0;
    while(i<SIZE){
        fill("lime");
        rect(0, i, SIZE, STRIPE_THICKNESS);
        i+=50;
         fill("yellow");
        rect(0, i, SIZE, STRIPE_THICKNESS);
        i+=50;
    }
}
