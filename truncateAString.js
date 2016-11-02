// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, 
// if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

var string2 = "...";
function truncateString(str, num) {
  if(str.length>num && str.length>3 && num != 2){
    console.log('in the if statement');
    var string = str.slice(0,num-3);
    return string.concat(string2);
  }
  else if(num<3){
    console.log('in the else if statement');
    var string1 = str.slice(0,num);
    return string1.concat(string2);
  }
  else{
    return str;
  }
}