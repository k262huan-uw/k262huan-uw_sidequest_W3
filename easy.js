// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
let randomBg = (240, 230, 140);

const gameBtn = {
  x: 400, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
};

function drawEasy() {
  background(randomBg);

  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("FIND MEEEE!!!!!!", width / 2, 160);

  textSize(18);
  text(
    "Search for the button 3 times to unlock the door to the next section.",
    width / 2,
    210,
  );

  fill("white"); // coloured rect white
  rect(width / 2, 760, 80, 120); // created a door
  fill("black");
  rect(375, 755, 5, 10); // created a door handle

  drawGameButton(gameBtn);
  cursor(isHover(gameBtn) ? HAND : ARROW);
}

let easyClicks = 0;

function easyMousePressed() {
  if (isHover(gameBtn)) {
    easyClicks++;
    randomButton(); // randomizes button position once mouse is clicked
    randomBg = color(random(0, 255), random(0, 255), random(0, 255)); // randomizes background colour once the button is pressed

    if (easyClicks >= 3) {
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

let opac = 30;

// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // This gives visual feedback to the player
  fill(buttonOpacity(opac));

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners
}

function buttonOpacity(opacity) {
  return color(
    red(randomBg) * 0.5,
    green(randomBg) * 0.5,
    blue(randomBg) * 0.5,
    opacity,
  );
}
