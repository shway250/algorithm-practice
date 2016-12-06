function processData(input) {
    var data =  input.split('\n'); //turns input into array
    var value = parseInt(data[0]); //gets value
    var length = parseInt(data[1]); //gets length
    var list = data[2].split(' '); //turns the array part into an array
    
    //simple for loop prints out index at which value appears in the array
    for(var i = 0; i<length;i++){
        if(list[i] ==value){
            console.log(i);
            break;
        }
    } 
} 