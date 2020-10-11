let x = prompt('Введите число',100)
function sum(x) {
     let y = 0
      for(let i = 1; i <=x; i++){
        y += i*i
      }
      return y
}
function square(x){
     let y = 0
     for(let i = 0; i <=x; i++){
          
          y += i
     }
     y = y**2
     return y
}
let answ = square(x) - sum(x)
alert(answ)
console.log(answ,sum(x),square(x))