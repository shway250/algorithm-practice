// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  arr = str.split(" ");
  var array = [];
  console.log(arr);
  for(var i = 0; i < num; i++){
    array.push(arr.join(""));
  }
  return array.join("");
}

repeatStringNumTimes("abc", 3);