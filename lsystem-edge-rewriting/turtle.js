

function turtle(s, l, t) { //sentence, starting line length, rotation
	this.todo = s;
	this.len = l;
	this.theta = t;
	var xoff = 0;
	var yoff = 0;

	this.render = function() {


		strokeWeight(2);
		for (var i = 0; i < this.todo.length; i++) {

			stroke(50,200, 240);
			var c = this.todo.charAt(i);
			
			//FOR NODE-REWRITING, SKIP OVER L AND R IN THE SENTENCE
			//FOR EDGE-REWRITING, HAVE L AND R DRAW A LINE AND TRANSLATE or not
			if (c === 'L') {
				stroke(10,map(sin(xoff), -1, 1, 90, 255), map(cos(yoff), -1, 1, 100, 255));
				// line(0, 0, this.len, 0);
				// translate(this.len, 0);
				xoff += 0.005;
			} else if (c === 'R') {
				//stroke(255, 0, 140);
				stroke(10,map(sin(xoff), -1, 1, 90, 255), map(sin(yoff), -1, 1, 100, 255));
				// line(0, 0, this.len, 0);
				// translate(this.len, 0);
			} else if (c === 'F') {
				//stroke(50,map(sin(xoff), -1, 1, 90, 255), map(cos(yoff), -1, 1, 100, 255));
				line(0, 0, this.len, 0);
				translate(this.len, 0);
				xoff += 0.001;
			} else if (c === 'G') {
				translate(this.len, 0);
			} else if (c === '+') {
				rotate(this.theta);
			} else if (c === '-') {
				rotate(-this.theta);
				yoff += 0.0001;
			} else if (c === '[') {
				push();
			} else if (c === ']') {
				pop();
			}
		}
	};

	this.setLen = function(l) {
		this.len = l;
	};

	this.changeLen = function(percent) {
		this.len *= percent;
	};

	this.setToDo = function(s) {
		this.todo = s;
	};
}