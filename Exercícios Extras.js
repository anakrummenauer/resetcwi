//Exercício 01 - Função que calcula reajuste salarial e o imprime

function imprimir(i){
    console.log(i)
}

//Diretrizes:
//Para salários de até 1 salário mínimo, reajuste de 25%;
//Para salários acima de 1 e menor ou igual a 3 salários mínimos, reajuste de 50%;
//Para salários acima de 3 salários mínimos, ajuste de 10%.


function ajusteSalarial(salario, salarioMinimo){
    if(salario <= salarioMinimo){
        imprimir(salario * 1.25)
    } else if(salario <= (salarioMinimo*3)){
        imprimir(salario * 1.50)
    } else{
        imprimir(salario * 1.10)
    }
}

ajusteSalarial(15000,1000)

//Exercício 02 - Calcular impostos sobre o valor de um produto

function imprimir(i){
    console.log(i)
}

//Diretrizes:
//Produtos de valor até R$500,00, imposto isento;
//Produtos de valor até R$750,00, imposto de 60% sobre o valor do produto;
//Produtos de valor até R$1000,00, imposto de 60% sobre o valor do produto + 8% sobre o valor total;
//Produtos de valor acima de R$1000,00, imposto de 68% sobre o valor do produto + 19% sobre o valor total.

function calcularImposto(valorProduto){
    taxaImposto = 0
    if(valorProduto <= 500){
        taxaImposto = 0
    }else if(valorProduto <= 750){
        taxaImposto = valorProduto * 0.60
    }else if(valorProduto <= 1000){
        taxaImposto = (valorProduto * 0.60) * 1.08
    }else{
        taxaImposto = (valorProduto * 0.68) * 1.19
    }
    return taxaImposto.toFixed(2)
}

imprimir(calcularImposto(1500))
