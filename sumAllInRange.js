// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.



function sumAll(arr) {
//   var sum;
  var smaller;
  var bigger;
  if(arr[0]<arr[1]){
    smaller = arr[0];
    bigger = arr[1];
  }else{
    smaller=arr[1];
    bigger=arr[0];
  }
  for(var i = smaller; i<bigger; i++){
    smaller += i+1;
    console.log(smaller);
  }
  return smaller;
}

sumAll([1, 4]);