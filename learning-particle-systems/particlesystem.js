function ParticleSystem(location) {
	this.origin = location.copy();
	this.particles = [];

	this.addParticle = function() {
		this.particles.push(new Particle(this.origin));
	}

	this.setLocation = function(loc) {
		this.origin = loc.copy();
	}

	this.applyForce = function(force) {
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].applyForce(force);
		}
	}

	this.applyRepeller = function(repeller) {
		for (var i = 0; i < this.particles.length; i++) {
			var force = repeller.repel(this.particles[i]);
			this.particles[i].applyForce(force);
		}
	}

	this.run = function() {
		var p;
		for (var i = this.particles.length - 1; i >= 0; i--) {
			p = this.particles[i];
			p.run();
			if (p.isDead()) {
				this.particles.splice(i, 1);
			}
		}
	}
}