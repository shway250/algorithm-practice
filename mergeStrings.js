function mergeStrings(a, b) {
  var ArrA = a.split('');
  var ArrB = b.split('');
  var answer = [];
  var loopLength;
  if(ArrA.length <= ArrB.length){
    loopLength = ArrB.length;
  }
  else{
    loopLength = ArrA.length;
  }
  console.log(loopLength);
  for(var i = 0; i < loopLength; i++){
    if(ArrA[i] !== false && ArrB[i] !== false){
      answer.push(ArrA[i]);
      answer.push(ArrB[i]);
    }
    else if(ArrA[i] === false){
      answer.push(edgeCase1);
    }
    else if(ArrB[i] === false){
      answer.push(ArrA[i]);
    }
  }
  return answer.join('');
}