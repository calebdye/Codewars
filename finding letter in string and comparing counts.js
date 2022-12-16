function XO(str) {
  
    let count1 = str.toLowerCase().match(/x/g);
    let count2 = str.toLowerCase().match(/o/g);
      //checking that their is values becuase .length gives error if null
     if ( count1 != null && count2 != null ){
       count1= count1.length
       count2=count2.length
     }
     
     if (count1==count2){
       return true
     }else {return false}
   }