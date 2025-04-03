btnEnviar.addEventListener("click", boasVindas); // Adiciona um evento de clique ao botão "Enviar"
btnLimpar.addEventListener("click", limpar); // Adiciona um evento de clique ao botão "Limpar"

// Função que exibe um alerta de boas-vindas
function boasVindas() {
    window.alert("Bem-vindo(a) à página!");
}

function limpar() {
    // Limpa os campos de entrada de texto
    document.getElementById("fnome").value = ""; // Limpa o campo de nome
}