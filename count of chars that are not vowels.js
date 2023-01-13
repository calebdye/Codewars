function consonantCount(str) {
    let count = 0
    let newStr = str.toLowerCase()
    for(const c of newStr){
      if('bcdfghjklmnpqrstvwxyz'.indexOf(c) >= 0)
        count++
      
    }return count
    }
    
    // const consonantCount = (str) => {
    // 	let count = 0
    // 	for (const c of str) {
    // 		if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) count++
    // 	}
    
    // 	return count
    // }