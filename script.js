document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Você clicou no botão!");
});
document.getElementById("meuBotao").addEventListener("click", function() {
    var imagemContainer = document.getElementById("imagemContainer");
    
    // Limpa qualquer imagem anterior (opcional)
    imagemContainer.innerHTML = '';

    // Cria um novo elemento de imagem
    var img = document.createElement("img");
    img.src = "URL_DA_IMAGEM_AQUI"; // Substitua pela URL da sua imagem
    img.alt = "Descrição da Imagem";
    img.style.maxWidth = "100%"; // Ajuste para a largura máxima do container

    // Adiciona a imagem ao container
    imagemContainer.appendChild(img);
});
