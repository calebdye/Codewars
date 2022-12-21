function count (string) {  
    //creating object to hold the counts
    var count = {}
    //turning string to array to loop through for count
     string.split('').forEach(element => {
      count[element] = (count[element] || 0) + 1;
       })
     return count;
  }