
// An LSystem has a starting sentence
// An a ruleset
// Each generation recursively replaces characteres in the sentence
// Based on the rulset

// Construct an LSystem with a startin sentence and a ruleset
function lsystem(axiom, r) {
  this.sentence = axiom;  // the starting setence
  this.ruleset = r;       // the ruleset (an array of rule objects)
  this.generation = 0;    

  // Generate the next generation
  this.generate = function() {
    // An empty string
    var nextgen = '';
    // For every character in the sentence
    for (var i = 0; i < this.sentence.length; i++) {
      // What is the character
      // We will replace it with itself unless it matches one of our rules
      var replace = this.sentence.charAt(i);
      // Check every rule
      for (var j = 0; j < this.ruleset.length; j++) {
        var a = this.ruleset[j].getA();
        // if we match the Rule, get the replacement String out of the Rule
        if (a === replace) {
          replace = this.ruleset[j].getB();
          break;
        }
      }
      // Append replacement String
      nextgen += replace;
    }
    // Replace sentence
    this.sentence = nextgen;
    // Increment generation
    this.generation++;
  };

  this.getSentence = function() {
    return this.sentence;
  };

  this.getGeneration = function() {
    return this.generation;
  };
}