function sortNumber(a,b) {
    return a - b;
}

var numArr = [];
function findMaxCount(numbers) {
    var sortedArr = numbers.sort(sortNumber);
    console.log(sortedArr);
    for(var i = 0; i < sortedArr.length; i++){
      for(var j = i+1; j<sortedArr.length; j++){
        if(sortedArr[i]==sortedArr[j] && sortedArr[i] !== sortedArr[j+1]){
            numArr.push(sortedArr[i]);
          }
      }
    }
    console.log(numArr);
  return numArr.length+1;
}

findMaxCount([1,3,7,2,3,3,3,3,3,3,7,7,7,7])