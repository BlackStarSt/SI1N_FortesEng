const email = document.getElementById('email');
const senha = document.getElementById('senha');

email.addEventListener('blur', (e) => {
    valida(e.target);
});

senha.addEventListener('blur', (e) => {
    valida(e.target);
});

function valida(input) {
    let regex = new RegExp(/[\s]/gi);
    if (input.value == '') {
        mensagem = 'Este campo não pode ficar em branco';
        input.classList.add('erro');
    } else if (email.value != 'cliente@fortes.com.br' && email.value != 'fornecedor@fortes.com.br') {
        mensagem = 'E-mail inválido!';
        email.classList.add('erro'); 
    } else if (email.value == 'cliente@fortes.com.br' && senha.value != 'clientefortes') {
        mensagem = 'Senha inválida!';
        senha.classList.add('erro');
    } else if (email.value == 'fornecedor@fortes.com.br' && senha.value != 'fornecedorfortes') {
        mensagem = 'Senha inválida!';
        senha.classList.add('erro');
    } else if (regex.test(input.value) == true) {
        mensagem = 'Este campo não pode conter espaços em branco';
        input.classList.add('erro');       
    } else if (regex.test(input.value) == false) {
        mensagem = '';  
        input.classList.remove('erro'); 
        window.location.replace('./qrcode.html');
    }
    input.setCustomValidity(mensagem);
}