// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

 function reverseString(str) {
  var string = str.split('');
  var revString = string.reverse();
  string = revString.join('');
  return string;
}

reverseString("hello");//returns "olleh "
