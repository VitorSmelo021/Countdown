let number = parseInt(prompt('Digite um número'));

function Impar(num){
    if(num % 2 == 0){
        document.getElementById('info').innerHTML = number + ' Seu número é par';
    }
    else if (num % 2 == 1){
        document.getElementById('info').innerHTML = number + " Seu número é impar";
    }
    else{
        document.getElementById('info').innerHTML =" Digite um número válido";
    }
}
Impar(number);