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
let titleEasy = true;
let titleMedium = false;
let titleHard = false;

function drawGame() {
  // Set background colour for the game screen
  background(randomBg);

  // ---- Title and instructions text ----

  if (titleEasy) {
    let titleMedium = false;
    let titleHard = false;
    fill(0); // black text
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Find Me - EASY MODE", width / 2, 160);

    textSize(18);
    text("Find the button 3 times to unlock the door.", width / 2, 210);

    fill("white"); // coloured rect white
    rect(width / 2, 760, 80, 120); // created a door
    fill("black");
    rect(375, 755, 5, 10); // created a door
  }

  if (titleMedium) {
    titleEasy = false;
    titleHard = false;
    fill(0); // black text
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Find Me - MEDIUM MODE", width / 2, 160);

    textSize(18);
    text(
      "Welcome to the White Room. Two paths lie ahead.. Will you climb the Ladder or descend down the Hole",
      width / 2,
      210,
    );

    fill("black");
    circle(30, 30, 45);

    image(ladderImg, 600, 0, 200, 600);
  }

  if (titleHard) {
    titleEasy = false;
    titleMedium = false;
    fill(0); // black text
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Find Me - HARD MODE", width / 2, 160);

    textSize(18);
    text("Find the button to win", width / 2, 210);
  }

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
// ------------------------------
// Mouse input for this screen
// ------------------------------

let buttonClicks = 0; // counts button clicks
let totalClicks = 0; // counts the total amount of clicks
const winClicks = 10; // need 10 button clicks to win
const maxClicks = 25; // if clicks go above 25 than the player loses

// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  totalClicks++;

  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    buttonClicks++;
    randomButton(); // randomizes button position once mouse is clicked
    randomBg = color(random(0, 255), random(0, 255), random(0, 255)); // randomizes background colour once the button is pressed

    if (buttonClicks < 3) {
      titleEasy = true;
      titleMedium = false;
      titleHard = false;
    } else if (buttonClicks >= 3 && buttonClicks <= 6) {
      titleEasy = false;
      titleMedium = true;
      titleHard = false;
      opac = 25;
    } else if (buttonClicks >= 6 && buttonClicks <= 9) {
      titleEasy = false;
      titleMedium = false;
      titleHard = true;
      opac = 140;
    } else {
      titleEasy = true;
      titleMedium = false;
      titleHard = false;
    }

    if (buttonClicks === winClicks) {
      currentScreen = "win";
      totalClicks = 0;
      buttonClicks = 0;
    }
  }

  if (totalClicks === maxClicks) {
    currentScreen = "lose";
    totalClicks = 0;
    buttonClicks = 0;
  }
}

function randomButton() {
  gameBtn.w = random(5, 150); // random button width
  gameBtn.h = random(5, 150); // random button height
  gameBtn.x = random(gameBtn.w / 2, width - gameBtn.w / 2); // random x position
  gameBtn.y = random(gameBtn.h / 2, height - gameBtn.h / 2); // random y position
}
