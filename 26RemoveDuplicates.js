var removeDuplicates = function(nums) {
 let count = 0
  for(let i=0;i<nums.length;i++){
      if(nums[i]!=nums[i+1]){
        nums[count++]=nums[i]
      } 
  }
  return count;  
};
const rm = removeDuplicates([1,1,2,3,3,6,7,8,9,8,9,7])
console.log(rm)