function sortIt(arr){
    var count = {};
  
  arr.forEach(element => {
  
  if(count[element]) {
  
     count[element]++;
  
  }else{
  
     count[element] = 1;
  
  }
  
  });
  return arr.slice().sort((x, y) => count[x] - count[y] || y - x);
    
  }