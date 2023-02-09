function arrayDiff(a, b) {
    const intersection = a.filter(element => !b.includes(element));
    
    return intersection
  }