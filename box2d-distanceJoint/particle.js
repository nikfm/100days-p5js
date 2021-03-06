// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



// Constructor
function Particle(x, y, order) {
	this.r = 8;

	// Define a body
	var bd = new box2d.b2BodyDef();
	if (order == bridgeLength || order == 0) {
		bd.type = box2d.b2BodyType.b2_staticBody;
	} else
		bd.type = box2d.b2BodyType.b2_dynamicBody;
	bd.position = scaleToWorld(x, y);

	// Define a fixture
	var fd = new box2d.b2FixtureDef();
	// Fixture holds shape
	fd.shape = new box2d.b2CircleShape();
	fd.shape.m_radius = scaleToWorld(this.r);

	// Some physics
	fd.density = 1.7;
	fd.friction = 0.1;
	fd.restitution = 0.1;

	// Create the body
	this.body = world.CreateBody(bd);
	// Attach the fixture
	this.body.CreateFixture(fd);

	// Some additional stuff
	this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
	this.body.SetAngularVelocity(random(-5, 5));

	// This function removes the particle from the box2d world
	this.killBody = function() {
		world.DestroyBody(this.body);
	};

	// Is the particle ready for deletion?
	this.done = function() {
		// Let's find the screen position of the particle
		var pos = scaleToPixels(this.body.GetPosition());
		// Is it off the bottom of the screen?
		if (pos.y > height + this.r * 2) {
			this.killBody();
			return true;
		}
		return false;
	};

	// Drawing the box
	this.display = function() {
		// Get the body's position
		var pos = scaleToPixels(this.body.GetPosition());
		// Get its angle of rotation
		var a = this.body.GetAngleRadians();

		// Draw it!
		rectMode(CENTER);
		push();
		translate(pos.x, pos.y);
		rotate(a);
		fill(127,110,170);
		stroke(200);
		strokeWeight(0);
		ellipse(0, 0, this.r * 2, this.r * 2);
		// Let's add a line so we can see the rotation
		//line(0, 0, this.r, 0);
		pop();
	};
}