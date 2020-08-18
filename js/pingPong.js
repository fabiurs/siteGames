var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = 4;
var ySpeed = 4;
var scor = 0, scorMax = 0;

function setup() {
  createCanvas(600, 500);
  noLoop();
}

function draw() {

  background(255);

  muta();
  afisMinge();
  afisPad();
  sare();

  fill('#d9c3f7');
  textSize(24);
  fill('red');
  text("Scor: " + scor + "   Scor Maxim: " + scorMax, 10, 25);
}
function muta() {
  xBall += xSpeed;
  yBall += ySpeed;
}

function sare(){
  if((xBall >= mouseX-60 && xBall <= mouseX + 60) && (yBall > 470)){
    ySpeed *= -1;
    scor = scor + 1;
    if(xSpeed > 0){
      xSpeed += 0.3;
    }
    else {
      xSpeed -= 0.3;
    }
    if(ySpeed > 0){
      ySpeed += 0.3;
    }
    else{
      ySpeed -= 0.3;
    }
  }

  if(yBall>500){
    noLoop();
    ok = createDiv('Ai pierdut! <br> Apasa "space" cand esti pregait <br> pentru a juca din nou!');
    ok.position(120, 60);
    ok.id = 'gOver';
    ok.style('color', 'white');
    xBall = Math.floor(Math.random() * 300) + 50;
    yBall = 50;
    if(scor> scorMax){
      scorMax = scor;
    }
    scor = 0;
    xSpeed = 4;
    ySpeed = 4;
  }
    
  if(xBall < 20 || xBall > 580){
    xSpeed *= -1;
  }
  if(yBall <= 23){
    ySpeed *= -1;
  }
}

function afisPad(){
  fill('blue');
  rect(mouseX-45, 475, 120, 20);
}

function afisMinge() {
  fill('#d9c3f7');
  ellipse(xBall, yBall, 20, 20);
}

function keyPressed(){
  if(keyCode === 32)
    loop();
}
