function getSum( a,b )
{
  //sort inputs
   let arr = []
   arr.push(a)
  arr.push(b)
  arr.sort((a,b)=> a-b)
  //create sum variable
  let sum = 0
  //make i = lower num and go up to second num
  for(let i=arr[0];i<=arr[1];i++)
    //if = return 1 num
    if (a===b){
      return a
      //else add up
    }else {
      sum+=i
    } return sum
}