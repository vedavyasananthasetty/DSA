
var maxProfit = function(prices) {  
    let minPrice = prices[0];
      let maxProfit = 0;
      for (const price of prices) {
          if (price < minPrice) {
              minPrice = price;
          } else if (price - minPrice > maxProfit) {
              maxProfit = price - minPrice;
          }
      }
      return maxProfit;
}

const a=maxProfit([7,1,5,3,6,4])

console.log(a)
