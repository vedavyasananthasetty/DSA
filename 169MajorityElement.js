var majorityElement = function(nums) {
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length/2)]; 
}
  
const me= majorityElement([3,3,2,1,1,1,1,2,1,3,3,3,3,3,3])
console.log(me)