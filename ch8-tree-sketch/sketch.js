// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Stochastic Tree
// Renders a simple tree-like structure via recursion
// Angles and number of branches are random

function setup() {
	// var test = createP('Click mouse to generate a new tree');
	//test.position(10,372);

	createCanvas(700, 700);
	newTree();
}

function draw() {

	noLoop();
}

function mousePressed() {
	newTree();
	//redraw();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		saveCanvas('tree07.png');
	}
	
}

function newTree() {
	background(232);
	noStroke();
	fill(240, 200, 0);
	ellipse(width, 0, 250, 250);
	fill(240,250,250,150);
	ellipse(width/2,0,400,150);
	ellipse(width/1.3,60,400,90);
	ellipse(width/2.1,40,550,100);
	push();
	translate(width / 2, height / 2);
	rotate(PI / 2.6);
	stroke(40, 30, 0);
	push();
	// Start the tree from the bottom of the screen
	translate(0, height / 1.3);
	// Start the recursive branching!
	branch(230);
	pop();
	push();
	// Start the tree from the bottom of the screen
	translate(-width / 10, height / 1.6);
	rotate(-PI / 6);
	// Start the recursive branching!
	branch(150);
	pop();
	push();
	// Start the tree from the bottom of the screen
	translate(width / 10, height / 1.1);
	rotate(PI / 8)
		// Start the recursive branching!
	branch(180);
	pop();
	pop();
}



function branch(h) {
	// thickness of the branch is mapped to its length
	var sw = map(h, 2, 120, 1, 5);
	strokeWeight(sw);
	// Draw the actual branch
	stroke(70, 40, 20);
	line(0, 0, 0, -h);

	if (h < 100) {
		strokeWeight(0);
		fill(random(10, 50), random(160, 200), 30, 200);
		push();
		translate(0, -h * .7);
		rotate(random(0, PI / 2));
		ellipse(0, -10, 10, 20);
		pop();
		push();
		translate(0, -h);
		rotate(random(-PI / 2, 0));
		fill(random(100, 160), 180, 30, 200);
		ellipse(0, -12, 10, 25);
		pop();
	}
	// Move along to end
	translate(0, -h);

	// Each branch will be 2/3rds the size of the previous one
	h *= 0.67;

	// All recursive functions must have an exit condition!!!!
	// Here, ours is when the length of the branch is 2 pixels or less
	if (h > 15) {
		// A random number of branches
		var n = Math.floor(random(2, 5));
		for (var i = 0; i < n; i++) {
			// Picking a random angle
			var theta = random(-PI / 4, PI / 4);
			push(); // Save the current state of transformation (i.e. where are we now)
			rotate(theta); // Rotate by theta
			branch(h); // Ok, now call myself to branch again
			pop(); // Whenever we get back here, we "pop" in order to restore the previous matrix state
		}
	}
}