function tailAndHead(arr){
    var prod = 1;
      arr.reduce((prev, curr)=>{
      var s1 = prev.toString();
      var s2 = curr.toString();
      prod 	*= parseInt(s1[s1.length-1]) + parseInt(s2[0]);
     //console.log(curr)
      return curr // Not sure why we return curr
      
    });
    return prod;
  }