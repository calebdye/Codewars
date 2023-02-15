function splitAllEvenNumbers(numbers, way)
{
  var result = [];
  
  for(var i in numbers){
    if(numbers[i]%2 === 0){ //if even
      switch (way){
        case 0:
          if((numbers[i]/2)%2 === 0){ // if half is even
            result.push((numbers[i]/2)-1);
            result.push((numbers[i]/2)+1);
          }
          else{ // if half is odd
            result.push(numbers[i]/2);
            result.push(numbers[i]/2);
          }
          break;
        case 1:
          result.push(1);
          result.push(numbers[i]-1);
          break;
        case 2:
          var t = 1;
          var tmp = numbers[i];
          
          while(tmp%2 === 0){ // find the greatest odd divisor of the number
            t = t*2;
            tmp = tmp/2;
          }
          
          for(var x=1; x<=t; x++)
            result.push(tmp);
            
          break;
        case 3:
          for(var x=0; x<numbers[i]; x++)
            result.push(1);
            
          break;
      }
    }
    else{
      result.push(numbers[i]);
    }
  }
  
  return result;
}