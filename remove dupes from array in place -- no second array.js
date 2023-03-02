var removeDuplicates = function(nums) {
    // var distinctNums = [...new Set(nums)]
 //nums.splice(0,distinctNums.length,distinctNums)
 //return nums
// return distinctNums
let j=0
for(let  i=0;i<nums.length;i++){
if (nums[i + 1] === nums[i]) { 
 nums.splice(i, 1);
 i--
  } 
}
}; 
