function longest(s1, s2) {

    //  const arr1 = s1.split("");
    
    //  const arr2 = s2.split("");
    
    //  const arr3 = arr1.concat(arr2).sort();
    
    //  const unique = new Set(arr3);
    
    //  const unique2 = [...unique]
    
    //  let str =''
    
    //   for(let i=0;i<unique2.length;i++){
    
    //     str+=unique2[i]
    
    //   } return str
    
     
    
        let arr = []
    
      for(var i=0;i<s1.length;i++){
    
        arr.push(s1[i])
    
      }
    
        for(var j=0;j<s2.length;j++){
    
        arr.push(s2[j])
    
      }
    
      arr.sort();
    
      const stringset = new Set(arr)
    
      const unique = [...stringset]
    
       let str =''
    
      for(let i=0;i<unique.length;i++){
    
        str+=unique[i]
    
      } return str
    
     
    
      }
    
     
    
    //   let arr = []
    
    //   for(var i=0;i<=s1.length;i++){
    
    //     arr.push(s1[i])
    
    //   }
    
    //     for(var j=0;j<=s2.length;j++){
    
    //     arr.push(s2[j])
    
    //   }
    
    //   arr.sort();
    
    //   const stringset = new Set(arr)
    
    //   const unique = [...stringset]
    
    //   return unique