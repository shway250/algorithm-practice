// Return the factorial of the provided integer.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num) {
  var product= 1;
  for(var i = 1; i < num+1; i++){
     product *= i;    
  }
  return product;
}

factorialize(5);