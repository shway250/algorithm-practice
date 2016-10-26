// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var string = str.split(" ");
  var arr = [];
  for(var i = 0; i<string.length; i++){
    arr.push(string[i].slice(0,1).toUpperCase() + string[i].slice(1, string[i].length).toLowerCase());
  }
  return arr.join(" ");
}

titleCase("I'm a little tea pot");