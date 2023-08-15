var removeElement = function(nums, val) {
  // let count = 0;
  // for(let i=0; i<nums.length;i++){
  //   if(nums[i]!==val){
  //     count++;
  //   }
    
  // }
  // return count;
  let count=0;
    for(let i=0; i<nums.length;i++){
    if(nums[i]!==val){
      nums[count++]=nums[i];
    }
    }
    return count;
};

const rm = removeElement([3,2,2,3], 2)
console.log(rm)