// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Wolfram Cellular Automata

// Simple demonstration of a Wolfram 1-dimensional cellular automata
// When the system reaches bottom of the window, it restarts with a new ruleset
// Mouse click restarts as well

 // An object to describe a Wolfram elementary Cellular Automata
var ca;

var delay = 0;

function setup() {
  createCanvas(800, 800);
  background(32);
  // An initial rule system
  var ruleset = [0, 1, 1, 0, 1,1, 1, 1];
  ca = new CA(ruleset);
}

function draw() {
  // Draw the CA
  ca.display();
  ca.generate();

  // If we're done, clear the screen, pick a new ruleset and restart
  // // if (ca.finished()) {
  // //   delay++;
  // //   if (delay > 30) {
  // //     background(0);
  // //     ca.randomize();
  // //     ca.restart();
  // //     delay = 0;
  // //   }
  // }
}

function mousePressed() {
  background(32);
  ca.randomize();
  ca.restart();
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
	saveCanvas('wolfie'+frameCount+'.jpg');
	}
}

