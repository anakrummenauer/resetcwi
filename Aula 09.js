//Exercício 1 - Função que recebe argumento e o imprime na tela
function imprimir(i){
    console.log(i)
}

//Exercício 2 - Criar uma função para os exercícios da aula 05 que retornem o valor final

//2.1 - Verificar se dois nomes são iguais
function verificarNomesIguais(nomeDoFulano, nomeDoBeltrano){
    return nomeDoFulano == nomeDoBeltrano
}

//2.2 - Verificar se a idade é de um adulto
function verificarMaioridade(idade){
    return idade >= 18
}

//2.3 - Calcular valor de boleto vencido com 10% de juros
function calcularBoletoAtrasado(valorBoleto){
    return valorBoleto * 1.1
}

//2.4 - Calcular o valor da média aritmética
function calcularMedia(array){
    i = 0
    soma = 0
    while(i < array.length){
        soma += array[i]
        i++
    }
    return soma / array.length
}

//2.5 - Calcular a margem bruta de uma empresa em percentual
function calcularMargemBruta(receitaLiquidaVendas, custoProdutosVendidos){
    lucroBruto = (receitaLiquidaVendas - custoProdutosVendidos)
    return (lucroBruto / receitaLiquidaVendas) * 100
}
