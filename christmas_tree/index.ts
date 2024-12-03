const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

    
  	//triangle(150, 50, 100, 150, 200, 150);
    let i=INITIAL_TRIANGLE_BASE_WIDTH
    while(i<500){
      triangle(150, TRUNK_WIDTH, i, 150, i*2, 300);
      fill("green");
      i+=1;
    }
}
