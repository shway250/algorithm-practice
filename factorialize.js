function factorialize(num) {
  var product= 1;
  for(var i = 1; i < num+1; i++){
     product *= i;
     console.log(product);
     
    
  }
  return product;
}

factorialize(5);