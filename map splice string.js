function isolateIt(arr){
    //loop through each el ==> map
    let ar = arr.slice()
   var newArr = ar.map((el,i)=>  {
   // if even insert |{
    if(el.length%2==0){
      let start = el.slice(0,(el.length/2))
      let end = el.slice(el.length/2,el.length)
      return start+'|'+end
      
     }else if (el.length%2!=0){
       //if Odd replace center letter
      let start = el.slice(0,(el.length/2))
      let end = el.slice(Math.floor(el.length/2)+1,el.length)
      return start+'|'+end
     }
   })
       return newArr
  }
  