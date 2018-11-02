function Particle(lvector) {
	this.location = lvector.copy();
	this.acceleration = new p5.Vector(0, 0);

//	var random1 = Math.random() * ((Math.random() > 0.5) ? -1 : 1);
//	var random2 = Math.random() - ((Math.random() > 0.5) ? 1 : 2);

	this.velocity = new p5.Vector(random(-1,1), random(-1,1));

	this.lifespan = 255.0;
	this.mass = 1;


	this.run = function() {
		this.update();
		this.display();
	}

	this.update = function() {
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
		this.lifespan -= 1.0;
	}

	this.display = function() {
		var r = this.velocity.mag();
		r = map(r,0,6,0,255);
		noStroke();
		fill(r,100,100, this.lifespan);
		ellipse(this.location.x, this.location.y, 8, 8);
	}
	
	this.applyForce = function(force) {
		var f = force.copy();
		f.div(this.mass);
		this.acceleration.add(f);
	}

	this.isDead = function() {
		return (this.lifespan < 0);
	}
}