// Crie uma função que tenha um número como parâmetro e depois
// arredonde o número para o segundo dígito após a vírgula e retorne o número
// arredondado

let number = parseFloat(prompt('Digite um numero decimal'));

function arredondado(num){
   return num.toFixed(2);
}

document.querySelector('#info').innerHTML = `Número arredondado: ${arredondado(number)}`