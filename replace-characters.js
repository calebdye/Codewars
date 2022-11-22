function correct(string)
{
	let result = string.replace(/5/g,'S')
  let result2 = result.replace(/0/g,'O')
  let result3 = result2.replace(/1/g,'I')
  return result3
}