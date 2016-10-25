// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function compareNumbers(a, b)
{
    return a - b;
}

function findLongestWord(str) {
  var arr = str.split(' ');
  var arrLen = [];
  for(var i = 0; i <arr.length; i++){
    arrLen.push(arr[i].length);
  }
  arrLen = arrLen.sort(compareNumbers).reverse();
  return arrLen[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");