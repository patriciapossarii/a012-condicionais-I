/*
# Exercício 2

Escreva um código que receba três valores. 
Uma idade,
um booleano que responda se a pessoa terminou ou não o ensino médio, 
e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

*/

let idade = prompt ("Digite a sia idade: ")
let isTerminouEnsinoMedio = prompt ("Terminou o Ensino Médio? Use true para sim e false para não:")
let isCursandoOutraFaculdade = prompt("Está cursando alguma faculdade? Use true para sim e false para não:")

if (idade >= 18) {
    console.log("É MAIOR de idade")
}
else {
    console.log("É MENOR de idade")
}

if (isTerminouEnsinoMedio = true) {
    console.log("Terminou o ensino médio")
}
else {
    console.log("NÃO teminou o ensio médio")
}

if (isCursandoOutraFaculdade = true) {
    console.log("Está cursando alguma faculdade")
}
else {
    console.log("NÃO Está cursando alguma faculdade")

}




