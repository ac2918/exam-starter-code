let shapeColor1;
let shapeColor2;
let shapeColor3;
let shapeColor4;

let x = 120;
let y = 130;

function setup() {
    createCanvas(600, 600);
shapeColor1 = color(random(255), random(255), random(255))
shapeColor2 = color(random(255), random(255), random(255))
shapeColor3 = color(random(0, 255), random(0, 255), random(0, 255))
shapeColor4 = color(random(0, 255), random(0, 255), random(0, 255))
}

function draw() {
    
}

function keyPressed() {
  changeColor();
}

function changeColor() {
    if(keyCode === ' ')
    fill(random(255), random(255), random(255))
    fill(shapeColor1)
    square(0, 0, 120)
    fill(shapeColor2)                 
    square(160, 0, 120)
    fill(shapeColor3)
    square(320, 0, 120)
    fill(shapeColor4)
    square(480, 0, 120)
}
    background(255)



function mousePressed() {
    if (mouseX >= x - 130 && mouseX <= x + 130 && mouseY >= y - 120 && mouseY <= y + 120) {
        shapeSelected = true;
        square(0, 480, 120);
    }
}
 


