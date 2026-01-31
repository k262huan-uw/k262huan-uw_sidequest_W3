function drawHard() {
  background("134, 221, 247"); // light blue

  // title
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find Me - HARD MODE", width / 2, 160);

  textSize(18);
  text("Look for the crown to find...", width / 2, 210);

  image(crownImg, 100, 280, 400, 400);
}

function hardMousePressed() {
  if (mouseX > 38 && mouseX < 56 && mouseY > 33 && mouseY < 49) {
    currentScreen = "win";
  }
}
