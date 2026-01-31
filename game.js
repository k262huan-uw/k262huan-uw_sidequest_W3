// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const gameBtn = {
  x: 400, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"

let randomBg = (240, 230, 140);

function drawGame() {
  // Set background colour for the game screen
  background(randomBg);

  // start in easy
  currentScreen = "easy";
  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------

let opac = 120;

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
