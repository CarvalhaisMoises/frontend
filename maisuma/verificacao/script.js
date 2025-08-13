function mensagem(){
 const men =document.getElementById("mensagem");
 const nomeDigitado = 'moises';
 const nome = document.getElementById("nome").value;
 const bot= document.getElementById("botao");
 if(nome == nomeDigitado){
  men.innerHTML ="seja bem vindo"
 }
else{
  men.innerHTML = "usuario não encontrado"
}
}