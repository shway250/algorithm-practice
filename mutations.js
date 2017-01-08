function mutation(arr) {
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