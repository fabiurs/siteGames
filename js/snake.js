
let numSegmente = 10, directie = 'right', frm = 15;
const xStart = 0, yStart = 250, diff = 10;

let xCor = [], yCor = [];
let xFruct = 0, scor = 0, yFruct = 0;

function setup() {
  noLoop();
  scoreElem = createDiv('Scor = 0');
  scoreElem.position(320, 20);
  scoreElem.id = 'scor';
  scoreElem.style('color', 'white');

  createCanvas(500, 500);
  stroke(255);
  strokeWeight(10);
  updateFruct();

  for (let i = 0; i < numSegmente; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }
}

function draw() {
  frameRate(frm);
  background(0);
  for (let i = 0; i < numSegmente - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSarpe();
  verificaJoc();
  verificaFruct();
}

function updateSarpe() {
  for (let i = 0; i < numSegmente - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (directie) {
    case 'right':
      xCor[numSegmente - 1] = xCor[numSegmente - 2] + diff;
      yCor[numSegmente - 1] = yCor[numSegmente - 2];
      break;
    case 'up':
      xCor[numSegmente - 1] = xCor[numSegmente - 2];
      yCor[numSegmente - 1] = yCor[numSegmente - 2] - diff;
      break;
    case 'left':
      xCor[numSegmente - 1] = xCor[numSegmente - 2] - diff;
      yCor[numSegmente - 1] = yCor[numSegmente - 2];
      break;
    case 'down':
      xCor[numSegmente - 1] = xCor[numSegmente - 2];
      yCor[numSegmente - 1] = yCor[numSegmente - 2] + diff;
      break;
  }
}

function verificaJoc() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    verificaSarpe()
  ) {
    noLoop();
    ok = createDiv('Ai pierdut!<br> Reincarca pagina pentru a juca din nou! <br> Apasa "space" cand esti pregait!');
    ok.position(220, 60);
    ok.id = 'gOver';
    ok.style('color', 'white');
  }
}
function verificaSarpe() {
  const xCapSarpe = xCor[xCor.length - 1];
  const yCapSarpe = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === xCapSarpe && yCor[i] === yCapSarpe) {
      return true;
    }
  }
}

function verificaFruct() {
  point(xFruct, yFruct);
  if (xCor[xCor.length - 1] === xFruct && yCor[yCor.length - 1] === yFruct) {
    scor++;
    scoreElem.html('Score = ' + scor);
    frm = frm + (frm%2);
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegmente++;
    updateFruct();
  }
}

function updateFruct() {
  xFruct = floor(random(10, (width - 100) / 10)) * 10;
  yFruct = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  switch (keyCode) {
    case 37:
      if (directie !== 'right') {
        directie = 'left';
      }
      break;
    case 39:
      if (directie !== 'left') {
        directie = 'right';
      }
      break;
    case 38:
      if (directie !== 'down') {
        directie = 'up';
      }
      break;
    case 40:
      if (directie !== 'up') {
        directie = 'down';
      }
    case 32:
      loop();
      break;
  }
}
