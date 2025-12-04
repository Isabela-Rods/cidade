function reservarLivro() {
    const nome = document.getElementById("nome").value.trim();
    const livroSelect = document.getElementById("livro");
    const data = document.getElementById("data").value;

    const livroTexto = livroSelect.options[livroSelect.selectedIndex].text;

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    if (livroSelect.value === "") {
        alert("Selecione um livro.");
        return;
    }

    if (data === "") {
        alert("Selecione a data de retirada.");
        return;
    }

    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("livroReservado", livroTexto);
    localStorage.setItem("dataRetirada", data);

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

function notificarUsuario() {
    const div = document.getElementById("notificacoes");
    if (!div) return;

    const nome = localStorage.getItem("usuarioNome");
    const livro = localStorage.getItem("livroReservado");
    const data = localStorage.getItem("dataRetirada");

    if (!nome || !livro || !data) return;

    div.innerHTML =
        `📚 <strong>${livro}</strong> foi reservado para <strong>${nome}</strong><br>
        📅 Data da retirada: <strong>${data}</strong>`;
}

function limparReserva() {
    localStorage.removeItem("usuarioNome");
    localStorage.removeItem("livroReservado");
    localStorage.removeItem("dataRetirada");

    alert("Reserva apagada.");
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

document.getElementById("LoginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Pegando valores dos inputs
    let usuario = document.getElementById("usuario").value.trim().toLowerCase();
    let senha = document.getElementById("senha").value.trim();
    let tipo = document.getElementById("tipo").value;

 // Verificação
if (usuario === "cliente" && senha === "1234" && tipo === "Cliente") {
    window.location.href = "file:///C:/Apache/htdocs/Dev_1o_Ano/cidade/html/Biblioteca/biblioteca.html"; 

} else if (usuario === "atendente" && senha === "5678" && tipo === "Atendente") {
    window.location.href = "file:///C:/Apache/htdocs/Dev_1o_Ano/cidade/html/BibliotecaAtendente/bibliotecaAtendente.html"; 

} else {
    alert("Usuário, senha ou tipo incorreto!");
    }
});