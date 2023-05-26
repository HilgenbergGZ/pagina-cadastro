$(document).ready(function(){

    $("#telefone").mask("(00) 00000-0000")

    $("#cpf").mask("000.000.000-00")

    $("#cep").mask("00000-000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15,
                maxlength: 15
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "",
            email: "",
            telefone: "",
            cpf: "",
            endereco: "",
            cep: ""
        },
        submitHandler: function(form) {
            alert("Envio feito com sucesso!")
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            let telefoneV = $("#telefone").val()
            if (telefoneV.length < 15) {
                alert("Digite um número de telefone válido!")
            }
            else if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})