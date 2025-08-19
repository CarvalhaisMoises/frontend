function verificardados(){
    const acesso =[{login:"moises",senha:"cleiton2"},{login:"oswaldo", senha:"umaquatro"}]
    const usuario= document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem")
    let encontrado = false;

    for (let i = 0; i < acesso.length; i++){
        if(usuario == acesso[i].login && senha==acesso[i].senha){
            encontrado = true;
            mensagem.innerHTML= "usuario encontrado"
            
        }
    }
    if (!encontrado){
        mensagem.innerHTML=" usuario  não encontrado"
    }
}   