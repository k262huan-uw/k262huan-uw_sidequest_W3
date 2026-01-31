function drawMedium() {
  background("white");

  // instructions
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find ?", width / 2, 160);

  textSize(18);
  text("Two paths lie ahead..", width / 2, 210);
  text("Will you climb the Ladder or descend into the Hole?..", width / 2, 230);

  fill("black");
  circle(500, 450, 150);

  image(ladderImg, 100, 280, 400, 400);
}

function mediumMousePressed() {
  if (dist(mouseX, mouseY, 500, 450) < 75) {
    currentScreen = "lose";
  }

  if (mouseX > 260 && mouseX < 340 && mouseY > 280 && mouseY < 680) {
    currentScreen = "hard";
  }
}
