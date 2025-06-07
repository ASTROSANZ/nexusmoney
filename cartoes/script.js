// script.js

function comprarCartao(valor) {
    // Armazena o valor do cartão e redireciona para a página de pagamento
    localStorage.setItem("valorCartao", valor);
    window.location.href = "confirmation.html";
}

// Função para copiar a chave Pix
function copiarChavePix() {
    const pixKey = document.getElementById("pix-key").innerText;
    navigator.clipboard.writeText(pixKey).then(() => {
        alert("Chave Pix copiada: " + pixKey);
    }).catch(err => {
        console.error("Erro ao copiar a chave Pix: ", err);
    });
}

// Ao carregar a página de pagamento, mostra o valor do cartão
window.onload = function() {
    const valorCartao = localStorage.getItem("valorCartao");
    document.getElementById("valor-cartao").innerText = valorCartao ? valorCartao : "0";
};

// Prevenir clique direito
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevenir seleção de texto e cópia, exceto no botão de copiar
document.addEventListener('copy', function(event) {
    event.preventDefault();
});
