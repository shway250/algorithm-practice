//Convert the given number into a roman numeral.

function convertToRoman(num){
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = ["M", "CM", "D", "CD", "C", "XC",'L', "XL", "X", "IX", "V", "IV", "I"];
  
  var romanized = ""
  //loop through decimal numbers array
  for(var i = 0; i<decimals.length; i++){
    //while the current decimal number is bigger than the converted number
    while(decimals[i]<= num){
      //add appropriate string to romanized
      romanized += romanNum[i];
      //subtract the decimals value from the converted number
      num -= decimals[i];
    }
  }
  return romanized;
}