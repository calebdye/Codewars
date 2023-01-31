function mirrorImage(arr){
    var a,b
      
     var result = arr.some((x,i)=>{
      a=arr[i];  //or a=x
       b=arr[i+1];
      return x===Number(String(b).split('').reverse().join(''));
    });
      return result ? [a, b] : [-1, -1];
    }
    
    
    