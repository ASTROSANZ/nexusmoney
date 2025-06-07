// Função para copiar a chave Pix
function copiarChavePix() {
    const pixKey = document.getElementById("pix-key").textContent;
    navigator.clipboard.writeText(pixKey)
        .then(() => {
            alert("Chave Pix copiada com sucesso!");
        })
        .catch((err) => {
            console.error("Erro ao copiar a chave Pix:", err);
        });
}

// Configurar o valor do cartão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const valorCartao = localStorage.getItem("valorCartao");
    document.getElementById("valor-cartao").textContent = valorCartao || "0,00"; // Define o valor padrão
});
