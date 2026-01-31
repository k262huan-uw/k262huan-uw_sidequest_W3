function drawEasy() {
  background(randomBg);

  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Find Me - EASY MODE", width / 2, 160);

  textSize(18);
  text("Find the button 3 times to unlock the door.", width / 2, 210);

  fill("white"); // coloured rect white
  rect(width / 2, 760, 80, 120); // created a door
  fill("black");
  rect(375, 755, 5, 10); // created a door handle

  cursor(isHover(gameBtn) ? HAND : ARROW);
  drawGameButton(gameBtn);
}

let easyClicks = 0;

function easyMousePressed() {
  if (isHover(gameBtn)) {
    easyClicks++;
    randomButton(); // randomizes button position once mouse is clicked
    randomBg = color(random(0, 255), random(0, 255), random(0, 255)); // randomizes background colour once the button is pressed

    if ((easyClicks) => 3) {
      easyClicks = 0;
      currentScreen = "medium";
    }
  }
}

function randomButton() {
  gameBtn.w = random(5, 150); // random button width
  gameBtn.h = random(5, 150); // random button height
  gameBtn.x = random(gameBtn.w / 2, width - gameBtn.w / 2); // random x position
  gameBtn.y = random(gameBtn.h / 2, height - gameBtn.h / 2); // random y position
}
