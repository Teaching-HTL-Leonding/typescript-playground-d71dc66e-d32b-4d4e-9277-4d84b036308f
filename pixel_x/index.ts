function setup() {
    const SIZE = 425; 
    const GRID = 25; 
let xyellow=GRID
let yyellow=GRID
let xgreen=SIZE-GRID*2
let ygreen=GRID
    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
while(xyellow<SIZE-GRID&&yyellow<SIZE-GRID){
    fill("yellow")
    rect(xyellow,yyellow,GRID,GRID)
    xyellow+=25
    yyellow+=GRID
}

while(xgreen>=GRID&&ygreen<SIZE-GRID){
    fill("green")
    rect(xgreen,ygreen,GRID,GRID)
    xgreen-=25
    ygreen+=GRID
}
  
}