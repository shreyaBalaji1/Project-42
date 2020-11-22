var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);

  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  

  translate(400,400);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  stroke(55,80,230);
  strokeWeight(7);
  line(0,0,175,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(205,80,230);
  strokeWeight(7);
  line(0,0,125,0);
  pop();

  push();
  rotate(scAngle);
  stroke(50,205,220);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  noFill();
  strokeWeight(8);
  stroke(50,205,220);
  arc(0, 0, 390, 390, PI, scAngle);

  stroke(205,80,230);
  arc(0, 0, 410, 405, PI, mnAngle);

  stroke(55,80,230);
  arc(0, 0, 430, 420, PI, hrAngle);

  drawSprites();
}