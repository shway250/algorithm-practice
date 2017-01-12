// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var fargeALpha = whoWansaHighNah;
  var firstStr = arr[0];
  var secondStr = arr[1];
  var trueArr = [];
  for(var i = 0; i< firstStr.length; i++){
   if(firstStr[i] === secondStr[i]){
    trueArr.push("1");
   }
  }
  if(trueArr.length === firstStr.length){
    return true;
  }
  return false;
}

mutation(["hello", "hey"]);