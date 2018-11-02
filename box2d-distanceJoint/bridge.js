// Two particles connected with distance joints

// Constructor
function Bridge() {
	this.len = 7;
	var y = 50;
	for (var i = 0; i < bridgeLength+1; i+=2) {
				particles.push(new Particle(10 * i+10, y,i));
				//particles.push(new Particle(10*(i+1)+10,y,i));
	}

	for (var i = 0; i < particles.length-1; i += 1) {

		var djd = new box2d.b2DistanceJointDef();
		// Connection between previous particle and this one
		djd.bodyA = particles[i].body;
		djd.bodyB = particles[i + 1].body;
		// Equilibrium length
		djd.length = scaleToWorld(this.len);


		// These properties affect how springy the joint is
		djd.frequencyHz = 5; // Try a value less than 5 (0 for no elasticity)
		djd.dampingRatio = 0.5; // Ranges between 0 and 1 (1 for no springiness)

		// Make the joint.  Note we aren't storing a reference to the joint ourselves anywhere!
		// We might need to someday, but for now it's ok
		var dj = world.CreateJoint(djd);
	}





	this.done = function() {
		for (var i = 0; i < particles.length -1; i += 1) {
			return this.particles[i].done() && this.particles[i + 1].done();
		}
	};

	this.display = function() {
		// Get the body's position
		for (var i = 0; i < particles.length-1; i += 1) {
			var pos1 = scaleToPixels(particles[i].body.GetPosition());
			var pos2 = scaleToPixels(particles[i + 1].body.GetPosition());

			stroke(200);
			strokeWeight(2);
			line(pos1.x, pos1.y, pos2.x, pos2.y);

			particles[i].display();
			particles[i + 1].display();
		}

	};
}