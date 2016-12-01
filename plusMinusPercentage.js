//Count the number of times different types of integers show up in an array and then give 
//a percentage out to 6 decimal points of how many times the different types of integers showed up.


function main(arr) {
    var percent = {plus: 0, minus:0, zero:0};
    
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            percent.plus += 1;
        }
        else if(arr[i]<0){
            percent.minus += 1;
        }
        else if(arr[i]===0){
            percent.zero += 1;
        }
    }
    console.log((percent.plus/arr.length).toFixed(6));
    console.log((percent.minus/arr.length).toFixed(6));
    console.log((percent.zero/arr.length).toFixed(6));
    return 'BLAH BLAH!'
}

main([-4, 3, -9, 0, 4, 1]);