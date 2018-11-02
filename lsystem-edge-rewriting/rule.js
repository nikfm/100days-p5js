// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// LSystem Rule class

function rule(a_, b_) {
  this.a = a_; //the parent character
  this.b = b_; //the child string

  this.getA = function() {
    return this.a;
  };

  this.getB = function() {
    return this.b;
  };
}