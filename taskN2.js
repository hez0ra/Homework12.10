let x = 1
let y = 2
let i = 0
while(x<4e6&&y<4e6){
     if(x%2==0){
          i += x
     }
     if(y%2==0){
          i += y
     }
     x += y
     y += x
}
console.log(i)