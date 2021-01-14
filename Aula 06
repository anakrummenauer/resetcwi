//Calcula o valor do IMC de acordo com a classificação da OMS

//Variáveis
peso = 0 //inserir valor
altura = 0 //inserir valor
imc = (peso / (altura**2))

//Parâmetros
if(imc < 18.50){
  classificacao = "Magreza"
  grauObesidade = 0
} else if(imc < 25){
  classificacao = "Normal"
  grauObesidade = 0
} else if(imc < 30){
  classificacao = "Sobrepeso"
  grauObesidade = 1
} else if(imc < 40){
  classificacao = "Obesidade"
  grauObesidade = 2
} else{
  classificacao = "Obesidade Grave"
  grauObesidade = 3
}

//Aplicação
console.log("Seu imc é", imc, "portanto está classificado como", classificacao)

switch (grauObesidade){
  case 1:
  case 2:
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
    break
  case 3:
    console.log("É importante procurar um médico para avaliar sua saúde.")
    break
}
