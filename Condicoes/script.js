// Adiciona os eventos de clique aos botões "Verificar" e "Limpar"
document.getElementById("btn-verificar").addEventListener("click", verificarIdade);
document.getElementById("btn-limpar").addEventListener("click", limpar);


// Função que verifica se o usuário é ou não maior de idade
function verificarIdade(){
    let idade = Number(document.getElementById("tidade").value); // Obtém o valor do campo de texto e converte para número
    if(idade >= 18){ // Verifica se a idade é maior ou igual a 18
        window.alert("Você é maior de idade!"); // Exibe alerta se for maior de idade
    } else {
        window.alert("Você é menor de idade!"); // Exibe alerta se for menor de idade
    }
}


// Limpa o campo de texto da idade inserida
function limpar(){
    document.getElementById("tidade").value = ""; // Limpa o campo de texto
}