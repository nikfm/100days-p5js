var systems = [];
var repeller;
//var repellers = [];
//var NUM_REPELLERS = 3;

function setup() {
	createCanvas(700, 700);
	repeller = new Repeller(new p5.Vector(mouseX,mouseY));
	// for (var i = 0; i < NUM_REPELLERS; i++) {
	// 	repellers.push(new Repeller(new p5.Vector(200*(i+1),200*(i+1))));
	// 	}
}

function draw() {
		background(0);

	//var gravity = new p5.Vector(.001*(mouseX-width/2),.001*(mouseY-height/2));
	var gravity = new p5.Vector(0, 0);
	for (var i = 0; i < systems.length; i++) {
		systems[i].addParticle();
		systems[i].applyForce(gravity);
		
		if(keyIsPressed) {
			systems[i].applyRepeller(repeller);
			repeller.display();
		}
		// for(var j = 0; j < repellers.length; j++){
		// 			systems[i].applyRepeller(repellers[j]);
		// 			repellers[j].display();
		// }
		systems[i].run();
	}

}

function mousePressed() {
	systems.push(new ParticleSystem(new p5.Vector(mouseX, mouseY)));
}