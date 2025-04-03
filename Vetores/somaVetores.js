// Crie um programa que calcule a soma dos elementos de um vetor que possua 5 posições.

console.log("SOMA DOS ELEMENTOS DE UM VETOR \n")

// Criando um vetor de 5 posições
let vetor = [3, 20, 19, 300, 2]

let soma = 0

// Calculando a soma dos elementos do vetor
for (let i = 0; i < vetor.length; i++){    
    soma = soma + vetor[i]
}

// Apresentando os elementos em cada posição do vetor
for (c = 0; c < vetor.length; c++){
    console.log(`Posição: ${c} : ${vetor[c]}`)
}

// Apreentando o resultado
console.log(`\nA soma dos elementos do vetor é: ${soma}`)