const hole = {
  x: 500,
  y: 450,
  r: 75,
};

const ladder = {
  x: 100,
  y: 280,
  w: 400,
  h: 400,
};

function drawMedium() {
  background("white");

  // instructions
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find Me - The White Room", width / 2, 160);

  textSize(18);
  text("Two paths lie ahead..", width / 2, 210);
  text("Will you climb the Ladder or descend into the Hole?..", width / 2, 230);

  fill("black");
  circle(500, 450, 150);

  image(ladderImg, 100, 280, 400, 400);
}

function mediumMousePressed() {
  if (dist(mouseX, mouseY, hole.x, hole.y) < hole.r) {
    currentScreen = "lose";
  }

  if (
    mouseX > ladder.x &&
    mouseX < ladder.x + ladder.w &&
    mouseY > ladder.y &&
    mouseY < ladder.y + ladder.h
  ) {
    currentScreen = "hard";
  }
}
