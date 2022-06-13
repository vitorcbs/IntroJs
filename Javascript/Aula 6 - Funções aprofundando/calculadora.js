function calculadora () {
    const OPERACAO = Number(prompt('Escolha um tipo de operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**)'))

    if (!OPERACAO || OPERACAO >= 7) {
        alert('Digite uma opção valida')
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor: '))
        let n2 = Number(prompt('Insira o segundo valor: '))
        let resultado;
        // definindo as funções
        function soma() {
            resultado = n1 + n2;
            // mostrando o resultado usando template strings
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }

        function mult() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divreal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }

        function divint() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
        }

        function potencia() {
            resultado = n1 ** n2;
            alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
            novaOperacao();
        }

        function novaOperacao () {
            let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não')

            if (opcao == 1) {
                calculadora()
            } else if (opcao == 2) {
                alert('Até mais')
            } else {
                alert('Digite uma opção valida')
                novaOperacao()
            }
        }
        
        switch (OPERACAO) {
            case (1) :
                soma()
                break
            case (2):
                subtracao()
                break
            case (3):
                mult()
                break
            case (4):
                divreal()
                break
            case (5):
                divint()
                break
            case (6):
                potencia()
                break
        }
    }
}

calculadora();