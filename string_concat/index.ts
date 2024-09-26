function setup(){
  createCanvas(500, 500);
  background("lightblue");
}
let clickLog: string = 'Clicked at (0, 0)\n';

function drawCircle(x: number, y: number): void {
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.width = '10px';
    circle.style.height = '10px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'red';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    document.body.appendChild(circle);
}
function logClick(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;

    drawCircle(x, y);


    const clickInfo = `Clicked at (${x}, ${y})\n`;
    clickLog += clickInfo;

    console.log(clickLog);
}


drawCircle(0, 0);
clickLog += 'Clicked at (0, 0)\n';

document.addEventListener('click', logClick);

