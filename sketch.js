var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
for (var k = 0; k <=Width; k = k + 80) {
  Divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j <=Width; j=j+50) {
  plinkos.push(new plinkos(j,75));
}

for (var j = 15; j <=Width-10; j=j+50) {
  plinkos.push(new plinkos(j,75));
}
function draw() {
  background(255,255,255);  
  drawSprites();
}