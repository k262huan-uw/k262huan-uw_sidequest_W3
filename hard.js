function drawHard() {
  background(134, 221, 247); // light blue

  // title
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You made it to the sky!", width / 2, 160);

  textSize(18);
  text("Click on the correct crown to find...", width / 2, 210);

  image(crownImg, 200, 280, 50, 50); // click to win
  image(crownImg, 400, 500, 100, 100);
  image(crownImg, 0, 400, 505, 505);
  image(crownImg, 0, 100, 100, 100);
  image(crownImg, 100, 0, 700, 700);
  image(crownImg, 500, 340, 505, 505);
}

function hardMousePressed() {
  if (mouseX > 220 && mouseX < 228 && mouseY > 296.5 && mouseY < 304) {
    currentScreen = "win";
  } else if (
    (mouseX > 438 && mouseX < 456 && mouseY > 533 && mouseY < 549) ||
    (mouseX > 192 && mouseX < 283 && mouseY > 567 && mouseY < 647) ||
    (mouseX > 38 && mouseX < 56 && mouseY > 133 && mouseY < 149) ||
    (mouseX > 366 && mouseX < 492 && mouseY > 231 && mouseY < 343) ||
    (mouseX > 693 && mouseX < 783 && mouseY > 507 && mouseY < 587)
  ) {
    currentScreen = "lose";
  }
}
