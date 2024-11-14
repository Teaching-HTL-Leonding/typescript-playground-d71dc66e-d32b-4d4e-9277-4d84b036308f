function setup() {
    const SIZE = 400;  
    const STRIPE_THICKNESS = 50; 

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i=STRIPE_THICKNESS;
    while(i<SIZE){
        fill("green");
        rect(0, 0, i, 50);
        i+=25;
                fill("yellow");
        rect(0, 50, i, 50);
        i+=25;
                fill("green");
        rect(0, 100, i, 50);
        i+=25;
                fill("yellow");
        rect(0, 150, i, 50);
        i+=25;
                fill("green");
        rect(0, 200, i, 50);
        i+=25;
                fill("yellow");
        rect(0, 250, i, 50);
        i+=25;
                fill("green");
        rect(0, 300, i, 50);
        i+=25;
                fill("yellow");
        rect(0, 350, i, 50);
        i+=25;
                fill("green");
        rect(i, 0, i, 50);
        i+=25;
                fill("yellow");
        rect(i, 50, i, 50);
        i+=25;
                fill("green");
        rect(i, 100, i, 50);
        i+=25;
    }

   
}
