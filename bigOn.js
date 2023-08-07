function logItems(n){
  for(let i=0; i< n; i++){
    console.log(i) // until here the code runs n times
  }
  for(let j=0; j< n; j++){
    console.log(j) // here it runs for n+n times which is 2n
  }
}

logItems(10) // this is O(n) operation.If we pass n number, the function or operation runs for n times. That is the worst case which is known as bigO notation. dropping constants will optimize the code.