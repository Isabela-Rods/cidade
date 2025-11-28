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

    alert(`Reserva feita!\n${livroTexto} reservado para ${nome}.`);
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