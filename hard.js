function drawHard() {
  background(134, 221, 247); // light blue

  // title
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find Crown", width / 2, 160);

  textSize(18);
  text("Click on the correct crown to find...", width / 2, 210);

  image(crownImg, 200, 280, 50, 50); // click to win
  image(crownImg, 400, 500, 100, 100);
  image(crownImg, 350, 330, 300, 300);
  image(crownImg, 400, 500, 50, 50);
  image(crownImg, 500, 400, 505, 505);
  image(crownImg, -20, 100, 700, 700);
  image(crownImg, -20, 0, 700, 700);
  image(crownImg, -60, 300, 500, 500);
}

function hardMousePressed() {
  if (mouseX > 220 && mouseX < 228 && mouseY > 296.5 && mouseY < 304) {
    currentScreen = "win";
  }
}
