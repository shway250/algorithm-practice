//function that returns numbers bigger than 100

function biggerThanC(arr){
  return arr.filter((item)=> item>100);
}

var numArr = [1,2,345,654,23,12312,6];

biggerThanC(numArr);

//function that returns words that contain an W 
function containsAW(arr){
  return arr.filter( item => item.indexOf("w")>=0);
}

var strArr = ["straw", "what the fuck?", 'this has no dubs'];

containsAW(strArr);

//returns an array containing all the singular items from two arrays

function findTheDiff(arr1, arr2){
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}
var first = [1,2,3,4,5,6,7];
var second = [1,2,4,5,6,8,0];

findTheDiff(first, second);

//numbers between 10 and 20

function betweenTenAndTwent(arr){
  return arr.filter((item) => item>=10 && item<=20);
}

let numbArr = [12,23,45,1,35,342,1,5,6,7,13,14,16,19, 20];

console.log(betweenTenAndTwent(numbArr));
