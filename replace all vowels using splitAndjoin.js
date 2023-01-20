function shortcut (string) {
  let newString = string.split('e').join('')
  newString = newString.split('a').join('')
  newString = newString.split('i').join('')
  newString = newString.split('o').join('')
  newString = newString.split('u').join('')
  return newString
}