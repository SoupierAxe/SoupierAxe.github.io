document.getElementById("meuBotao").addEventListener("click", function() {
    var imagemContainer = document.getElementById("imagemContainer");
    
    // Limpa qualquer imagem anterior (opcional)
    imagemContainer.innerHTML = '';

    // Cria um novo elemento de imagem
    var img = document.createElement("img");
    img.src = "https://tse4.mm.bing.net/th?id=OIP.6cBTiqWzzJH-mvcJKVSkZwHaE8&pid=Api&P=0&h=180"; // Substitua pela URL da sua imagem
    img.alt = "Descrição da Imagem";
    img.style.maxWidth = "100%"; // Ajuste para a largura máxima do container

    // Adiciona a imagem ao container
    imagemContainer.appendChild(img);
});
