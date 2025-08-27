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

            setTimeout(() => {
         mensagem.innerHTML="redirecionando..."
        },1000);
        
        setTimeout(() => {
            window.location.href="segundo.html";
        }, 3000);
            
        }
    }
    if (!encontrado){
        mensagem.innerHTML=" usuario  não encontrado"
        setTimeout(() => {
            mensagem.innerHTML="tente novamente"
        },500);

        setTimeout(() => {
            mensagem.innerHTML="faça seu login no site"
            document.getElementById("login").value=""
            document.getElementById("senha").value=""
        }, 3000);
    }
}   

