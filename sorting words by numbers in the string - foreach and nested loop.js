function order(words){
    //Max arr positions is 10
    let res = [1,2,3,4,5,6,7,8,9,10]
    let re = words.split(' ')
    //looping through each word
    re.forEach((el, i) => {
      //Looping through letters of each word to get the number, using that number to put into array
      for(let i=0;i<el.length;i++){
        if(Number(el[i])){
          res.splice(el[i],1,el)
        }
      }
      //returning result, filtering for only string and returning a string
    }); return res.filter((el)=> typeof(el) ==='string').join(' ')
  }