var merge = function(nums1, m, nums2, n) {
  for(let i=0;i<n;i++){
   nums1[m+i]=nums2[i];
  }
  nums1.sort((a,b)=> a-b);
  return nums1;
};

const nu = merge([0], 0, [1], 1)
console.log(nu)

