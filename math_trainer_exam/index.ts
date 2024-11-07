let num1=0
let num2=0
let num3=0
let answer=0
const position= Math.floor(random(0, 3));

function setup() {
    createCanvas(400, 400);
    background("black");

    num1 = Math.floor(random(1, 101));
    num2 = Math.floor(random(1, 101));
    num3 = Math.floor(random(1, 101));
    const num4= Math.floor (random(1, 101));
    const num5= Math.floor (random(1, 101));
    const operator= Math.floor(random(0, 3));
     
    const position= Math.floor(random(0, 3));
    noFill();
    stroke("yellow")
   
    

    textSize(50);
    fill("yellow");
  
    text(num4, 120, 100);
    text(num5, 220, 100);
    if( operator===1){
        answer=num4*num5
        textSize(50);
        fill("yellow");
        text("*", 190, 100);
    }
    if( operator===2){
        answer=num4+num5
        textSize(50);
        fill("yellow");
        text("+", 190, 100)
    }
    if( operator===0){
        answer=num4-num5
        textSize(50);
        fill("yellow")
        text("-", 190, 90)
    }
   if(position===0){
    num1=answer
   }
   else if(position===1){
    num2=answer
   }
   else if( position===2){
    num3=answer
   }
    

    text(num1, 50, 230);
    text(num2, 170, 230);
    text(num3, 290, 230);
}


function mouseClicked() {

    if(mouseX >50 && mouseX <100 
    &&mouseY > 170 && mouseY < 250)
    if(num1===answer){
        textAlign(CENTER, CENTER)
        textSize(50);
        fill("yellow");
        text(`${num1}ist richtig`,160, 290 );
    }

    if(mouseX >170 && mouseX <250 
    &&mouseY > 170 && mouseY < 250)
    if(num2===answer){
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("yellow");
        text(`${num2}ist richtig`,160, 290 );
    }
    
    if(mouseX >290 && mouseX <370 
    &&mouseY > 170 && mouseY < 250)
    if(num3===answer){
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("yellow");
        text(`${num3}ist richtig`,160, 290 );
    }

}

function mouseMoved() {
    
    fill("black");
    noStroke();
    rect(0, height - 20, width, height);

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text(`${mouseX}/${mouseY}`, 5, height - 5);
}
