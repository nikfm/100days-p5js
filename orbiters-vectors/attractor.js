function Attractor(x, y, m) {
	// Our Attractor is a simple object that doesn’t move.
	// We just need a mass and a location.
	this.mass = m;
	this.loc = createVector(x, y);

	this.display = function() {
		stroke(0);
		fill(175, 0, 200, 20);
		ellipse(this.loc.x, this.loc.y, this.mass * 2, this.mass * 2);
	}

	this.attract = function(m) {
		var force = p5.Vector.sub(this.loc, m.loc);
		var distance = force.mag();
		distance = constrain(distance, 5, 25);
		force.normalize();

		var strength = (this.mass * m.mass) / (distance * distance);
		force.mult(strength);
		return force;
	}

	this.pullpush = function(m) {
		var force = p5.Vector.sub(this.loc, m.loc);
		var distance = force.mag();
		distance = constrain(distance, 1, 200);
		force.normalize();
		if (distance < 200) {
			var strength = -(this.mass * m.mass) / (distance*distance);
		} else 
			var strength = (this.mass * m.mass) / (distance*distance);
			
		force.mult(strength);
		return force;
	}
}