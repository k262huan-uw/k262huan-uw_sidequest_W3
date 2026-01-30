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

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Screen", width / 2, 160);

  textSize(18);
  text(
    "Click the button (or press ENTER) for a random result.",
    width / 2,
    210,
  );

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
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // same colour as the background but with a different opacity
  let buttonCol = color(red(randonBg), green(randomBg), blue(randomBg), 180);
  // This gives visual feedback to the player
  fill(buttonCol);

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    randomButton(); // randomizes button position once mouse is clicked
    randomBg = color(random(0, 255), random(0, 255), random(0, 255)); // randomizes background colour once the button is pressed
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Game logic: win or lose
// ------------------------------
// This function decides what happens next in the game.
// It does NOT draw anything.
function triggerRandomOutcome() {
  // random() returns a value between 0 and 1
  // Here we use a 50/50 chance:
  // - less than 0.5 → win
  // - 0.5 or greater → lose
  //
  // You can bias this later, for example:
  // random() < 0.7 → 70% chance to win
  if (random() < 0.5) {
    currentScreen = "win";
  } else {
    currentScreen = "lose";
  }
}

function randomButton() {
  gameBtn.w = random(5, 150); // random button width
  gameBtn.h = random(5, 150); // random button height
  gameBtn.x = random(gameBtn.w / 2, width - gameBtn.w / 2); // random x position
  gameBtn.y = random(gameBtn.h / 2, height - gameBtn.h / 2); // random y position
}
