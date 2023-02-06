function duplicateCount(string){
    //convert to lowercase
  string=string.toLowerCase()
  //create object to hold key value pair -- a:2
    var count = {}
    //Create array to push value/counts of each letter to, don't need letter just count
    var res =[]
    //create variable to increse if duplicate -- we want to know how may are duplicating, not how many duplicate -- 2 = two letters duplicating
    var dup = 0
    //turning string to array to loop through for count
     string.split('').forEach(element => {
      count[element] = (count[element] || 0) + 1;
       })

   // looping through object to get value counts
    for (var key in count) {
//pushing them to array
       res.push(count[key]);
   }
  //ordering array largest first, did not need to
  res = res.sort((a,b)=>b-a)
  
  //loop through values and count each instance of dupes
  for(let i=0; i<res.length;i++){
    if(res[i]>1){
      dup = dup+1
    }
  }
  
  //if string empty return 0
 if(string==''){
   return 0
   //if no dups return 0
 } else if(res[0]<2){
   return 0
   //else return the count of dup instances
 }else {return dup}
}