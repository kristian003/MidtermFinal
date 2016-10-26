var alf = 0;
var beta = 0;
var gamma = 0

var alfbutton;
var betabutton;
var gammabutton;

var bubble1;
var bubble2;
var bubble3;


var alfabool = false;
var betabool = false;
var gammabool = false;

var alfaArray = [];
var betaArray = [];
var gammaArray = [];


function setup() {
  createCanvas(600, 400);
  alfbutton = createButton("alpha");
  alfbutton.position(10, 10);
  alfbutton.mousePressed(alfarandom);

  bubble1 = new alfabubble(random(width), random(height));

  betabutton = createButton("beta");
  betabutton.position(60, 10);
  betabutton.mousePressed(betarandom);

  bubble2 = new betabubble(random(width), random(height));
  
  gammabutton = createButton("gamma");
  gammabutton.position(100, 10);
  gammabutton.mousePressed(gammarandom);

  bubble3 = new gammabubble(random(width), random(height));

}

function draw() {
  frameRate(1);

  background(255);

  if (alfabool == true) {
    var randomalf = random(7.5, 12.6);
    alf = int(map(randomalf, 7.5, 12.6, 0, 50));
    console.log(alf);

    for(var i = 0; i < alf; i++){
      alfaArray.push(new alfabubble(random(width), random(height)));
    }

    for(var i = 0; i < alfaArray.length; i++){
      alfaArray[i].display();
    }

    alfaArray = [];
  }

  if (betabool == true) {
    var randombeta = random(12, 38.1);
    beta = int(map(randombeta, 12, 38.1, 0, 50));
    console.log(beta);

    for (var i = 0; i < beta; i++) {
      betaArray.push(new betabubble(random(width), random(height)));
    }

    for (var i = 0; i < betaArray.length; i++) {
      betaArray[i].display();
    }

    betaArray = [];
  }

 if (gammabool == true) {
    var randomgamma = random(38, 45.1);
    gamma = int(map(randomgamma, 38, 45.1, 0, 50));
    console.log(gamma);

    for (var i = 0; i < gamma; i++) {
      gammaArray.push(new gammabubble(random(width), random(height)));
    }

    for (var i = 0; i < gammaArray.length; i++) {
      gammaArray[i].display();
    }

    gammaArray = [];
  }
  // bubble1.display();


}

function alfarandom() {
  if (alfabool == false) {
    alfabool = true;

  } else {
    alfabool = false;
  }
  console.log(alfabool);
}

function betarandom() {
  if (betabool == false) {
    betabool = true;

  } else {
    betabool = false;
  }
  // console.log(betabool);
}
function gammarandom() {
  if (gammabool == false) {
    gammabool = true;

  } else {
    gammabool = false;
  }
  // console.log(betabool);
}

function alfabubble(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = 50;

  this.display = function() {
    fill("green");
    ellipse(this.x, this.y, this.diameter, this.diameter);
}
}
function betabubble(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = 50;

  this.display = function() {
    fill("blue");
    ellipse(this.x, this.y, this.diameter, this.diameter);
}
}
function gammabubble(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = 50;

  this.display = function() {
    fill("yellow");
    ellipse(this.x, this.y, this.diameter, this.diameter);
}
}