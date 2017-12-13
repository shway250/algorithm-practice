//return a new array with items that exist in only one of two arrays

function diffArray(arr1, arr2) {
  catArr = arr1.concat(arr2);//concat the arrays
  ///filter out from the new array items that aren't in arr1 or arr2
  var newArr = catArr.filter(item => !arr1.includes(item)|| !arr2.includes(item));
  
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
          ["diorite", "andesite", "grass", "dirt", "dead shrub"]);