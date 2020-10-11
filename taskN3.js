let arr = []
function prime(n){
 for(let j = 2; j<n; j++){
      if(n%j==0)return false
      else return true
 }
} 
for(let i = 1;i<600851475143; i++){
     if(600851475143%i==0&&prime(i)==true){
          arr.push(i)
     }
}


console.log(arr)