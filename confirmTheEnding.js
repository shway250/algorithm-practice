// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  string = str.slice(str.length-target.length, str.length);
  
  if (string == target){
    return true;
    
  }
  else{
    return false;
  }
}

confirmEnding("Bastian", "n");