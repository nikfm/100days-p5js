function Repeller(loc) {
	this.location = loc.copy();
	this.strength = 2000;
	this.r = 40;
	
	this.display = function() {
		noStroke();
		fill(255,100,100);
		this.location = createVector(mouseX,mouseY);
		ellipse(this.location.x,this.location.y,this.r,this.r);
	}
	
	this.repel = function(particle) {
		var force = p5.Vector.sub(this.location,particle.location);
		var d = force.mag();
		//d = constrain(d,5,1000);
		force.normalize();
		var size = (-1*this.strength*particle.mass)/(d*d);
		force.mult(size);
		return force;
	}
}