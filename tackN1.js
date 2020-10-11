let x = 1
let i = 0
while(x<1e3){
     if(x%3==0){
          i += x
     }
     else if(x%5==0){
          i += x
     }
     x++
}
console.log(i)