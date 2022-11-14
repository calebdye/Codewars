function getCount(str) {
  //return count of all vowels
  return str.length - str.toLowerCase().replace(/a|e|i|o|u/gi,'').length
}