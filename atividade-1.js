// Faça uma função que receba um único valor representando segundos.
// Essa função deverá convertê-lo para hora, minutos e segundos. Todas as
// variáveis devem ser passadas como parâmetro, não havendo variáveis
// globais.

let num = parseInt(prompt("Digite o número que você quer converter"));
function converterSeg(second) {
  if (second >= 0) {
    let hour = second / 3600; 
    let minute = (second % 3600) / 60;
    let segundo = ((second % 3600)%60);

    document.getElementById("info").innerHTML = `${Math.floor(hour)} horas ${Math.floor(minute)} minutos ${Math.floor(segundo)} segundos`;
    return
  }
}
converterSeg(num);
