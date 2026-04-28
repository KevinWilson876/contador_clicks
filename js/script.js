// Seleciona o botão com id "adicionar" do HTML e guarda na variável botaoAdicionar
const botaoAdicionar = document.getElementById("adicionar");

// Cria uma variável chamada contar e define o valor inicial como 0
contar = 0; // Variável para contar os cliques

// Adiciona um "ouvinte" de evento ao botão — quando ele for clicado, executa a função abaixo
botaoAdicionar.addEventListener("click", function() {
    
    // Incrementa o contador em +1 a cada clique
    contar = contar + 1; 

    // Seleciona o elemento <p> com id "numero" para atualizar o texto na tela
    const contadorElement = document.getElementById("numero");

    // Atualiza o conteúdo do elemento <p> com o valor atual da variável contar
    contadorElement.textContent = contar;
});

const botaoDiminuir = document.getElementById("diminuir");

botaoDiminuir.addEventListener("click", function() {
    if(contar > 0){
        console.log("esta nomal");
        contar = contar - 1; // Decrementa o contador em -1 a cada clique
        const contadorElement = document.getElementById("numero");
        contadorElement.textContent = contar;
    }
    else{
        // console.log("passou de zero");
        alert("O contador não pode ser menor que zero!");
    }
    
});
