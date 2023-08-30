var romanToInt = function(s) {
    // let count=0
    // for(let i=0;i<s.length;i++){
    //   if(s[i]=='I' && s[i+1]=='V'){
    //     count=count+4
    //   } else if(s[i]=='I' && s[i+1]=='X'){
    //     count=count+9
    //   } else if(s[i]=='I'){
    //     count=count+1
    //   } else if(s[i]=='V'){
    //     count=count+5
    //   } else if(s[i]=='X' && s[i+1]=='L'){
    //     count=count+40
    //   } else if(s[i]=='X' && s[i+1]=='C'){
    //     count=count+90
    //   } else if(s[i]=='X'){
    //     count=count+10
    //   } else if(s[i]=='L'){
    //     count=count+50
    //   } else if(s[i]=='C' && s[i+1]=='D'){
    //     count=count+400
    //   } else if(s[i]=='C' && s[i+1]=='M'){
    //     count=count+900
    //   } else if(s[i]=='C'){
    //     count=count+100
    //   } else if(s[i]=='D'){
    //     count=count+500
    //   } else if(s[i]=='M'){
    //     count=count+1000
    //   }
    // }
    // return count


    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};

let x=romanToInt('IX')
console.log(x)



// let count=0
//     for(const r of s){
//       if(r=='I'){
//         count=count+1
//       } else if(r=='V'){
//         count=count+5
//       } else if(r=='X'){
//         count=count+10
//       } else if(r=='X'){
//         count=count+10
//       } else if(r=='L'){
//         count=count+50
//       } else if(r=='C'){
//         count=count+100
//       } else if(r=='D'){
//         count=count+500
//       } else if(r=='M'){
//         count=count+1000
//       }
//     }
//     return count