const palavra = prompt("Escreva a palavra que deseja saber se é um Palíndromo ou não")
let palavraInvertida = ""

for( let i = palavra.length -1; i>=0; i--){
    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
    alert("Sua palavra é um Palíndromo")
} else {
    alert(palavraInvertida + "\n A palavra  não é um palíndromo")
} 

