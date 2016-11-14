function countHoles(num) {
    var count = 0;
    var string1 = num.toString();
    var arr = string1.split('');
    for(var i = 0; i <arr.length; i++){
        if(arr[i] === '0' || arr[i] === '4' || arr[i] === '6' || arr[i] === '9'){
            count = count + 1;
        }
        else if(arr[i] === '8'){
            count = count + 2;
        }
    }
    return count;
}