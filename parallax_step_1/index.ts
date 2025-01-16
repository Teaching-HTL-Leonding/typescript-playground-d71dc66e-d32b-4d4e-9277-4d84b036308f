let backgroundimages: p5.Image[] = [];
let backgroundScale: number = 1;
let scaledImageWidth: number = 0;
let scaledImageHight: number = 0;
let scrollPosition: number = 0;

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundimages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`))
    }

}
function setup() {
    createCanvas(500, 500)
    backgroundScale = width / backgroundimages[0].width;
    scaledImageWidth = backgroundimages[0].width * backgroundScale
    scaledImageHight = backgroundimages[0].height * backgroundScale
}

function draw() {
    if (keyIsDown(39)) {
        scrollPosition -= 5
    } else if (keyIsDown(37)) {
        scrollPosition += 5
    }


    let step = scrollPosition / backgroundimages.length;
    for (let i = 0; i < backgroundimages.length; i++) {
        translate(step, 0);
        image(backgroundimages[i], -scaledImageWidth, 0, scaledImageWidth, scaledImageHight);
        image(backgroundimages[i], 0, 0, scaledImageWidth, scaledImageHight);
        image(backgroundimages[i], scaledImageWidth, 0, scaledImageWidth, scaledImageHight);
    }

}