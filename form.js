const form = document.getElementById('formulario-verificacao');
let vNumero = false;

form.addEventListener('submit', function(c){
    
    const pNumero = document.getElementById('primeiro-numero');
    const sNumero = document.getElementById('segundo-numero');
    const mensagemSucesso = `O Numero B e maior que o Numero A: <b>Acesso Valido</b>`;
    
    c.preventDefault();

    function validaNumero(a, b){
        
        const primeiroNumero = a;
        const segundoNumero = b;
    
        if(segundoNumero > primeiroNumero){
            
            const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            pNumero.value = '';
            sNumero.value = '';

            
        } else {
            pNumero.style.border = '1px solid red';
            document.querySelector('.mensagem-erro').style.display = 'block';
        }
    }
    vNumero = validaNumero(pNumero.value, sNumero.value);
    
})



