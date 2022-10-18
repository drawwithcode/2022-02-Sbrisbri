let hamburgers = []; //Declare the array for the object, there are no values inside because I will use the for loop to create them

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  for(let i = 0; i < 40; i++){ //For loop to create the object
    let x = random(width); //Declare object variables: with this variable I define the x position which will be random
    let y = random(height); //Declare object variables: with another variable I define the y position which will be random
    let r = random(0.25, 4); //Declare object variables: r is another variable which indicate the randomness of the speed of each hamburger that I create
    hamburgers.push(new DrawHamburger(x, y, r)); //Initialize the object: this string of code means that I'm creating the object that has x, y and r as parameters.
  }
}

function draw() {
  background(0);
  for(let i = 0; i < hamburgers.length; i++){
    hamburgers[i].drawhamburger();//Define the first method, action related to the object (the object will appear)
    hamburgers[i].move();//Define the second method, action related to the object (the object will move)
  }
  push();//Code strings to draw a rectangle as a text container
  rectMode(CENTER);
  strokeWeight(2.5);
  fill("#ecac0e");
  rect(windowWidth / 2, windowHeight / 2, 700, 100);
  pop();

  push();//Text that goes on the rectangle
  textSize(32);
  textFont("Luckiest Guy");//Font that has been added into the html 
  textAlign(CENTER, CENTER);
  fill(0);
  text("CLOUDY WITH A CHANCE OF HAMBURGERS", windowWidth / 2 + 2.5, windowHeight / 2 + 2.5);
  fill("#db0007");
  text("CLOUDY WITH A CHANCE OF HAMBURGERS", windowWidth / 2, windowHeight / 2);
  pop();

  push();//Code strings to draw a rectangle and the text that goes on it (left position)
  rectMode(CENTER);
  strokeWeight(2.5);
  fill("#db0007");
  rect(160, windowHeight - 55, 250, 40);
  textSize(16);
  textFont("Luckiest Guy");
  textAlign(CENTER, CENTER);
  fill(0);
  text("<--   DECREASE THE SPEED OF RAIN", 160 + 2.5, windowHeight - 55 + 2.5);
  fill("#ecac0e");
  text("<--   DECREASE THE SPEED OF RAIN", 160, windowHeight - 55);
  pop();

  push();//Code strings to draw a rectangle and the text that goes on it (right position)
  rectMode(CENTER);
  strokeWeight(2.5);
  fill("#db0007");
  rect(windowWidth - 160, 55, 250, 40);
  textSize(16);
  textFont("Luckiest Guy");
  textAlign(CENTER, CENTER);
  fill(0);
  text("INCREASE THE SPEED OF RAIN   -->", windowWidth - 160 + 2.5, 55 + 2.5);
  fill("#ecac0e");
  text("INCREASE THE SPEED OF RAIN   -->", windowWidth - 160, 55);
  pop();
}

class DrawHamburger{ //Define the class
  constructor(x, y, r){ //Define the constructor, i.e. the specification for an object
    this.w = 50;
    this.h = 10;
    this.x = x;
    this.y = y;
    this.r = r;
  }

  drawhamburger(){//Define the first method (how the object will look like when it will appear)
    push();
    strokeWeight(1.5);
    stroke(0);
    fill("#f59a39");
    rect(this.x, this.y, this.w, this.h, 0, 0, 5, 5);
    fill("#db0007");
    rect(this.x, this.y - 10.5, this.w, this.h - 5, 2, 2, 2, 2);
    fill("#9fc41d");
    rect(this.x, this.y - 18.5, this.w + 10, this.h - 5, 3, 3, 3, 3);
    fill("#88240b");
    rect(this.x, this.y - 29, this.w, this.h, 3, 3, 3, 3);
    fill("#ecac0e");
    rect(this.x, this.y - 39.5, this.w, this.h - 5, 2, 2, 2, 2);
    fill("#f59a39");
    arc(this.x,this.y - 45, this.w, this.w, 180, 0, CHORD);
    pop();
  }

  move(){//Define the second method (how the object will move)
    let s = map(mouseX, 0, width, 0, 4);
    this.y = this.y + s + this.r;
    if (this.y - this.h - 100 > height) {
    	this.y = -this.h - 100;
  }
}
}

function windowResized() { //With this function I make the project responsive to the size of the canvas 
resizeCanvas(windowWidth, windowHeight);
}

