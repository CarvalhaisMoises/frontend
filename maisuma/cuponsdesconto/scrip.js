function verificarCupom(){
 const mensagem = document.getElementById("mensagem");

 const cupom= "diadecomprar";
const cupomavalidar = document.getElementById("cupom").value;
if (cupomavalidar == cupom){
  mensagem.innerHTML = "Cupom válido!";
}
else{
  mensagem.innerHTML = "Cupom inválido.";
}

}
