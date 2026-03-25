const loginForm = document.getElementById('loginForm');
const matricula = document.getElementById('matricula');
const senha = document.getElementById('senha');

// 1. Função que o professor usou para MOSTRAR o erro
function mostrarErro(input, erroId, mensagem) {
    const erroElemento = document.getElementById(erroId);
    erroElemento.textContent = mensagem;
    input.classList.add('error'); // Adiciona a borda vermelha
}

// 2. Função que o professor usou para LIMPAR o erro
function limparErro(input, erroId) {
    const erroElemento = document.getElementById(erroId);
    erroElemento.textContent = "";
    input.classList.remove('error');
}

// 3. Eventos de INPUT (para limpar o erro enquanto digita)
matricula.addEventListener('input', () => {
    limparErro(matricula, 'matriculaErro');
});

senha.addEventListener('input', () => {
    limparErro(senha, 'senhaErro');
});

// 4. Evento de SUBMIT (Validação final)
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Não deixa a página recarregar

    let isValid = true;

    // Valida Matrícula
    if (matricula.value.trim() === "") {
        mostrarErro(matricula, 'matriculaErro', 'Informe sua matrícula');
        isValid = false;
    }

    // Valida Senha
    if (senha.value.trim() === "") {
        mostrarErro(senha, 'senhaErro', 'Informe sua senha');
        isValid = false;
    }

    // Se tudo estiver certo, redireciona
    if (isValid) {
        window.location.href = "index.html";
    }
});