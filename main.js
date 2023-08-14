jQuery.validator.addMethod("nomeCompleto", function(value, element) {
    return this.optional(element) || /^[a-zA-Z]+\s+[a-zA-Z]+(\s+[a-zA-Z]+)*$/.test(value);
}, "Por favor, insira o nome completo");

$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder: "(__) _____-____"});
    $('#cpf').mask('000.000.000-00', {placeholder: "   .   .   -"})
    $('#cep').mask('00000-000')
    $('#meuFormulario').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
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
            nome: {
                required: "Por favor, insira o seu nome completo",
                nomeCompleto: "Insira o nome e sobrenome"
        }
    }
        
});
})