<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $telefone = addcslashes($_POST['telefone']);
    $mensagem = addcslashes($_POST['mensagem']);

    $destinatario = "contato.nathaliacaldonho@gmail.com";
    $assunto = "Coleta de dados - NMC Web - Development";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$mensagem;

    $cabecalho = "From: contato.nathaliacaldonho@gmail.com "."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destinatario, $assunto, $corpo, $cabecalho)){
        echo("Mensagem enviada com sucesso!");
    }
    else{
        echo("Houve um erro ao enviar o email!");
    }


?>