//Break an array into chunks size var=size and return chunks in multidimensional array

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  
  for(var i = 0;i<arr.length; i +=size){
    var blah = arr.slice(i,i+size);
    newArr.push(blah);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);