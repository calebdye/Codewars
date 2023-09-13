function alphabetPosition(text) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let result=[]
    for(let i=0; i<text.length;i++){
      if(abc.indexOf(text[i].toLowerCase())+1 != 0 ){
        
    result.push(abc.indexOf(text[i].toLowerCase())+1)
      }
    }
    return result.join(' ');
  }