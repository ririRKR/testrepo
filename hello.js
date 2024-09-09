

function setup() {
  createCanvas(400, 400); 
}

let x = 50;
let vx = random(100, 200);
let vy = 0;


function draw() {
  background(0);
  fill(255,0,0)
  ellipse(x, 200, 100, 50);
  x+=vx;

  if (x > width+50) 
    x = 50;
    vx=Math.random(5,10);
}
