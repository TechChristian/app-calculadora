function Calcular(tipo, valor) {
    if (tipo == 'acao') {

        if (valor == 'c') {
            // limpar visor
            document.getElementById('resultado').value = '';
        }

        if (valor == '+' || valor == "-" || valor == "*" || valor == '/' || valor == '.') {
            let campo = document.getElementById('resultado').value;
            let ultimoChar = campo.slice(-1); // pega o último caractere digitado

            // só permite operador se:
            // 1. já existir algo no campo
            // 2. o último caractere NÃO for outro operador
            if (campo.length > 0 && !['+', '-', '*', '/', '.'].includes(ultimoChar)) {
                document.getElementById('resultado').value += valor;
            }
        }

        // converter resultado
        if (valor == '=') {
            var valor_campo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = valor_campo;
        }

    } else if (tipo == 'valor') {
        document.getElementById('resultado').value += valor;
    }
}
