let backgroundimages: p5.Image[] =[];
let backgroundScale: number= 1;
let scaledImageWidth: number= 0;
let scaledImageHight: number=0;

function preload(){
    for(let i = 0; i<winter.length; i++){
    backgroundimages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`))}
}
function setup (){
    createCanvas(500,500)
    backgroundScale = width / backgroundimages[0].width;
    scaledImageWidth = backgroundimages[0].width = backgroundScale
    scaledImageHight = backgroundimages[0].height = backgroundScale
}

function draw(){
    for(let i=0; i< backgroundimages.length; i++){
        image(backgroundimages[i],0,0,500,500)
    }
    
}