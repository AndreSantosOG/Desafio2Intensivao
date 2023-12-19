//1-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

//2-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 12
const numberTwo = 15
alert(`A soma é ${numberOne + numberTwo}`)

//3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const numberThree = 2
if(typeof numberThree == 'number') {
    alert("É um número")
}else {
    alert("Não é um número")
}

//4-Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const stringOne = 'Arroz'
if(typeof stringOne == 'string') {
    alert("É uma string")
}else {
    alert("Não é uma string")
}

//5-rie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const booleanOne = true
if(typeof booleanOne == 'boolean') {
    alert("É um valor booleano")
}else {
    alert("Não é um booleano")
}

//6-Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subOne = 25
const subTwo = 13
alert(subOne - subTwo)
//7-Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multiOne = 25
const multiTwo = 3
alert(multiOne * multiTwo)
//8-Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divOne = 25
const divTwo = 5
alert(divOne / divTwo)

//9-Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const even = 86
if(even % 2 == 0) {
    alert("É um número par")
}else {
    alert("Não é um número par")
}

//10-Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const odd = 23
if(odd % 2 != 0) {
    alert("É um número ímpar")
}else {
    alert("Não é um número ímpar")
}