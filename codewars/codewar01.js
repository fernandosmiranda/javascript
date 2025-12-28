function sumMul(n,m){  
  if(n <=0 || m <= 0){
    return "INVALID"  
  }

  let soma = 0

  for(let cont = n; cont < m; cont += n){
    soma += cont    
  }

  return soma
 
} 
 
let resultado = sumMul(10, 5)
console.log(resultado)