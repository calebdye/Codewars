function splitAndMerge(string, separator) {
  //split the string into an array of words
  let newString = string.split(' ')
  //iterate over each word and split each character, then join back using the separator and finally join each of the new mapped words on the original spaces
  newString= newString.map(word => word.split('').join(separator)).join(' ')
  return newString//.split(' ').join(`${separator}`)
}

//return str.split(" ").map(word => word.split("").join(sp)).join(" ");