function drawHard() {
  background("134, 221, 247"); // light blue

  // title
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find Crown", width / 2, 160);

  textSize(18);
  text("Look for the crown to find...", width / 2, 210);

  image(crownImg, 200, 280, 50, 50);
}

function hardMousePressed() {
  if (mouseX > 220 && mouseX < 228 && mouseY > 296.5 && mouseY < 304) {
    currentScreen = "win";
  }
}
