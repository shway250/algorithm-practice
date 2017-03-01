var arr = [1, 2, 'asd', [1,2]];
var ans = [];
function filterList(l){
  for(var i = 0; i <l.length; i ++){
    if(isNaN(l[i])){
      console.log(l[i]);
    }else{
      ans.push[l[i]];
    }
  }
  return ans;
}

filterList(arr);