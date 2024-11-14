function setup() {
    const SIZE = 425; 
    const GRID = 25;  

    createCanvas(SIZE, SIZE);
    background("black");

   

    let i=GRID;
    while(i<SIZE-GRID){
        fill("yellow");
        rect(i, i, 25, 25);
        i +=25;

    i=GRID*17;
    while(i<SIZE+GRID){
        fill("green");
        rect(i, i, 25, 25);
        i-=25;
    }
    }
}
