var lsys;
var turtle;
var counter = 0;
var axiom;
var angle;
var ruleset = [];

function setup() {
  createCanvas(800, 800);
  
   //ruleset[0] = new rule("L","L+R++R-L--LL-R+");
   //ruleset[1] = new rule("R","-L+RR++R+L--L-R")
   ruleset[0] = new rule("L","L+F+R-F-L+F+R-F-L-F-R+F+L-F-R-F-L+F+R-F-L-F-R-F-L+F+R+F+L+F+R-F-L+F+R+F+L-F-R+F+L+F+R-F-L+F+R-F-L");
   ruleset[1] = new rule("R","R-F-L+F+R-F-L+F+R+F+L-F-R+F+L+F+R-F-L+F+R+F+L+F+R-F-L-F-R-F-L+F+R-F-L-F-R+F+L-F-R-F-L+F+R-F-L+F+R")
   // Create LSystem with axiom and ruleset
   axiom = "L";
   angle = -PI/4;
   lsys = new lsystem(axiom,ruleset);
   turtle = new turtle(lsys.getSentence(),width*.4,angle); 
   

  smooth();

  // var ruleset = [];
  // ruleset[0] = new rule('F', "FF+[+F-F-F]-[-F+F+F]");
  // lsys = new lsystem("F", ruleset);
  // turtle = new turtle(lsys.getSentence(), height/3, radians(25));
}

function draw() {
  background(32);
  fill(232);
  
  renderInfo();
  
  
  translate(mouseX,mouseY);
  rotate(PI/4);

  turtle.render();

}

function renderInfo() {
	noStroke();
  textSize(16);
  textFont("Helvetica");
	text("axiom: " + axiom + "  /  angle: " + floor(degrees(-angle)), 10,30);
	text("ruleset: " + ruleset[0].getA() + " -> " + ruleset[0].getB(),10,50);
	text("ruleset: " + ruleset[1].getA() + " -> " + ruleset[1].getB(),10,70);
	text("generation # " + lsys.getGeneration(),10,90);
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		saveCanvas("lsystemnodeminus"+ruleset[0].getB()+".tif");
	}
}


function mousePressed() {
  if (counter < 10) {
    push();
    lsys.generate();
    //println(lsys.getSentence());
    turtle.setToDo(lsys.getSentence());
    turtle.changeLen(0.25);
   	pop();
    //redraw();
    counter++;
  }
}