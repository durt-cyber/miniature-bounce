let balls = [];
let gravity = 0.2;
let bounce = 0.82;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  createBalls(18);
}

function createBalls(count) {
  balls = [];
  for (let i = 0; i < count; i++) {
    balls.push({
      x: random(width),
      y: random(height),
      r: random(10, 28),
      vx: random(-2, 2),
      vy: random(-1, 1),
      color: color(random(255), random(255), random(255), 200)
    });
  }
}

function draw() {
  background(17, 24, 39, 24);

  for (let b of balls) {
    b.vy += gravity;
    b.x += b.vx;
    b.y += b.vy;

    if (b.x - b.r < 0) {
      b.x = b.r;
      b.vx *= -bounce;
    } else if (b.x + b.r > width) {
      b.x = width - b.r;
      b.vx *= -bounce;
    }

    if (b.y - b.r < 0) {
      b.y = b.r;
      b.vy *= -bounce;
    } else if (b.y + b.r > height) {
      b.y = height - b.r;
      b.vy *= -bounce;
      b.vx *= 0.99;
    }

    fill(b.color);
    circle(b.x, b.y, b.r * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
