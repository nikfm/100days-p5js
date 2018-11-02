// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our rectangles
var boxes = [];

var particles = [];

var bridge;
var bridgeLength = 68;

function setup() {
	createCanvas(700, 700);

	// Initialize box2d physics and create the world
	world = createWorld();


	bridge = new Bridge();
}

var start = false;
function keyPressed() {
	start = true;
}

function draw() {
	background(32);

	if (start) {


		// We must always step through time!
		var timeStep = 1.0 / 30;
		// 2nd and 3rd arguments are velocity and position iterations
		world.Step(timeStep, 10, 10);


		if (frameCount > 70 && frameCount % 10 == 0 && random(1) < .6) {
			var b = new Box(width / 2, 20);
			boxes.push(b);
		}

		// Display all the boundaries
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].display();
		}
		bridge.display();

		// Display all the pairs
		for (var i = boxes.length - 1; i >= 0; i--) {
			boxes[i].display();
			if (boxes[i].done()) {
				boxes.splice(i, 1);
			}
		}
	}
}