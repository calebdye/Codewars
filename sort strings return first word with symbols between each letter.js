function twoSort(s) {
    s.sort()
    let word = s[0]
    let res = ''
    for(let i=0;i<word.length;i++){
      res += word[i]+'***'
    }return res.substring(0, res.length-3)
  }