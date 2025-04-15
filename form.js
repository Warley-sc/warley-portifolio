document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const contato = document.getElementById("contato").value;
    const mensagem = document.getElementById("mensagem").value;

    const destinatario = "warleyrr19@gmail.com"; // <- Coloque seu e-mail aqui

    const assunto = encodeURIComponent("Novo Contato do Formulário");
    const corpo = encodeURIComponent(
        `Nome: ${nome}\nE-mail: ${email}\nContato: ${contato}\nMensagem:\n${mensagem}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
});

