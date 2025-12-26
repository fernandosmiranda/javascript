let num = [5, 8, 2, 9, 3]

num.push(7) // push adiciona o elemento no final do array.

console.log(num) // imprime o array na tela

console.log(`O elemento na posição 0 é o ${num[0]}`) // exibe o primeiro elemento do array

console.log(`O comprimento do vetor é ${num.length}`) // informa o comprimento do array

console.log(`Vetor ordenado: ${num.sort((a, b) => a - b)}`) // ordena os elementos do array

for(let pos = 0; pos < num.length; pos++){
    console.log(`Posição ${pos} => ${num[pos]}`)
}

console.log("--------------")

// Outra forma de fazer o mesmo loop for

for(let pos in num){
    console.log(`Posição ${pos} => ${num[pos]}`)
}

// Retorna a posição do valor 7
// Obs.: Ele retorna 3, mas como começa com 0 o elemento 7 está na 4a posição.
console.log(num.indexOf(7))

// Formatando a saída.
console.log(`O valor 7 está na posição ${num.indexOf(7)+1}`)

// Se você procurar por um elemento que não existe o JavaScript retorna o valor -1

// Criando cópia de array.
const copiaOrdenada = [...num].sort((a, b) => a - b);
// Obs.: Dessa forma você cria uma cópia do array num, ordena e salva ela ordenada na variável copiaOrdenada mantendo a original intacta.
