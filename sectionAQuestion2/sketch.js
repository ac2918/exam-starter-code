//declaring 
let NumOfBounces = 0;

let showText = true;
 
// assigning the width and height
let widthOfBall;
let heightOfBall;

//random speed between 1 and 5 pixels
let speedX = 3;
let speedY = 4;


function setup() {
    createCanvas(800, 600);
    //random x and y coordinates
x = random(200, 400)
y = random(200, 500)
widthOfBall = random(20, 200)
heightOfBall = random(20, 200)

}

function draw() {
    background(200, 60, 160)

    //calling the bouce and keyPressed function in draw so it loops
bounce();
keyPressed();
    textSize(40)
    //showText
text(NumOfBounces, 400, 70);

    //design of the circle
    stroke(50, 100, 50)
    strokeWeight(5)
    fill(255)
    ellipse(x, y, widthOfBall, heightOfBall)

    //adding speed to the x and y positions
    x += speedX;
    y += speedY; 

 //reversing speed when it reaches the edge of the canavs
    if (x > width - widthOfBall / 2 || x < widthOfBall / 2) {
        speedX *= -1
    }

    if (y > height - heightOfBall / 2 || y < heightOfBall / 2) {
        speedY *= - 1
    }


    //displaying the number of bounces
function bounce() {
    if(x > width - widthOfBall / 2 || x < widthOfBall / 2) {
        NumOfBounces = NumOfBounces + 1;
    }
 if(y > height - heightOfBall / 2 || y < heightOfBall / 2) {
    NumOfBounces = NumOfBounces + 1;
 }


}

//use keys to change the dynamic of the circle

function keyPressed() {
if(key === 'UP_ARROW') {
    ellipse(x, y, widthOfBall, heightOfBall + 1)
}

if(key === 'DOWN_ARROW') {
    ellipse(x, y, widthOfBall, heightOfBall - 1)
}

if(key === 'LEFT_ARROW') {
    ellipse(x, y, widthOfBall - 1, heightOfBall)
}

if(key === 'RIGHT_ARROW') {
   ellipse(x, y, widthOfBall + 1, heightOfBall)
}

}

}












