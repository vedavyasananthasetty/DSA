function logItems(n){
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      console.log(i,j)
    }
  }
} //here we got an output of n^2 times. which is 3^2 = 9. This is an example of bigO(n^2). So basically if we add another nested for loop, it will become n *n*n = n^3 but still it is denoted by bigO(n^2). Dropping non dominants will optimize the code. 


logItems(3)