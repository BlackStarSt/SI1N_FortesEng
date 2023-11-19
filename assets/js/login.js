const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn');

email.addEventListener('blur', (e) => {
    validaDados(e.target);
});
    
senha.addEventListener('blur', (e) => {
    validaDados(e.target);
});

function validaDados(input) {
    let regex = new RegExp(/[\s]/gi);
    
    if (input.value == '') {
        mensagem = 'Este campo não pode ficar vazio';
        input.classList.add('erro');
    } else if (regex.test(input.value) == true) {
        mensagem = 'Este campo não pode conter espaços em branco';
        input.classList.add('erro');       
    } else if (email.value == 'cliente@fortes.com.br' && senha.value != 'clientesfortes') {
        mensagem = 'Senha incorreta!';
        senha.classList.add('erro');
    } else if (email.value == 'fornecedores@fortes' && senha.value != 'fornecedoresfortes') {
        mensagem = 'Senha incorreta!';
        senha.classList.add('erro');
    } else if (email.value !== 'cliente@fortes.com.br' && email.value !== 'fornecedores@fortes.com.br') {
        mensagem = 'E-mail incorreto';
        email.classList.add('erro');
    } else {
        senha.classList.remove('erro');
        senha.classList.remove('erro');
        window.location.replace('./qrcode.html');
    }
    input.setCustomValidity(mensagem);
}