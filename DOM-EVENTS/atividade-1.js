// Pega a referência aos elementos HTML
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Quando o botão é clicado, abre a modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clica no 'x', fecha a modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora da modal, fecha-a
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
