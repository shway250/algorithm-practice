//Write a function that will prin tth esum of intergers in an array


var arr = [1,2,3,4,5,65,23];

function main(arr) {
    
    var total = 0;
    for(var i = 0; i< arr.length; i++){
        total += arr[i];
    }
    console.log(total);

}

