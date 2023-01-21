function cutIt(arr){
    //arr.sort((a,b) => a.length-b.length)
   let shortest = arr.reduce((a,b)=> a.length <= b.length ? a : b)
   //loop through each word
   let newArr=[]
   arr.forEach((el, i) =>  newArr.push(el.substr(0,shortest.length)))
     //push each word trimmed to arr[0].length
   return newArr
  
 }