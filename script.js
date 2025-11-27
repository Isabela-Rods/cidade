function reservarLivro() {
    const select = document.getElementById("livro");
    const livro = select.options[select.selectedIndex].text;

    if (select.value === "") {
        alert("Selecione um livro antes de reservar.");
    } else {
        alert(`${livro} reservado com sucesso!`);
    }
}

function pesquisarLivro() {
    const termo = document.getElementById("pesquisa").value.toLowerCase();
    const livros = document.querySelectorAll(".livro");

    livros.forEach(livro => {
        const titulo = livro.querySelector("h3").innerText.toLowerCase();
        const autor = livro.querySelector("p").innerText.toLowerCase();

        if (titulo.includes(termo) || autor.includes(termo)) {
            livro.style.display = "block";
        } else {
            livro.style.display = "none";
        }
    });

}
function descricao() {
    document.querySelectorAll(".livro").forEach(livro => {
        livro.addEventListener("click", () => {
            const link = livro.getAttribute("data-link");
            
            if (link) {
                window.location.href = link;
            }
        });
    });
}
descricao();