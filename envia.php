<h1>CHEGUEI AQUI</h1>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];

    // Configurações de email
    $destinatario = "contato.nathaliacaldonho@gmail.com"; // endereço que vai chegar as mensagens
    $assunto = "Nova mensagem do formulário de contato - NMC - DEV";

    // Monta o corpo da mensagem
    $mensagem_formatada = "Nome: $nome\n";
    $mensagem_formatada .= "Email: $email\n";
    $mensagem_formatada .= "Telefone: $telefone\n\n";
    $mensagem_formatada .= "Mensagem:\n$mensagem";

    // Envia o email
    if (mail($destinatario, $assunto, $mensagem_formatada)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
    }
} else {
    echo "Acesso inválido.";
}
?>
