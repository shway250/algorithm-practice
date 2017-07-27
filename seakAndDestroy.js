// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// function destroyer(arr) {
//   // Remove all the values
//   return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr, num1, num2, num3) {
  var newArr = arr.filter(function(param){
    if(param === num1){
      console.log(param);
    }else if(param === num2){
      console.log(param);
    }else if(param === num3){
      console.log('blergle');
    }else{
      return param;
    }
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);