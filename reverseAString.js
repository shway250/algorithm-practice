function reverseString(str) {
  var string = str.split('');
  var revString = string.reverse();
  string = revString.join('');
  return string;
}

reverseString("hello");
