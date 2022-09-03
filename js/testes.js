// PRIMEIRO PROJETO - CONVERSOR DE BINARIO PARA DECIMAL
let valorDigitado = document.querySelector("#binario")
let valorSaida = document.querySelector("#decimal")
let btnConverter = document.querySelector("#btnConverter")
let btnLimpar = document.querySelector("#btnLimpar")


function aviso() {
	if (bin != 0 && bin != 1) {
		window.alert("Binario aceita apenas 0 e 1")
	} else{
		window.alert("Informe no maximo 8 numeros de 0 e 1")
		}
}
console.log(binario)





/*function inicio() {
            let nome = window.prompt('Qual é o seu nome?')
            let res = window.document.getElementById('resultado')
            // Também funciona com o comando abaixo
            // let res = window.document.querySelector('section#resultado')
            res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
        }*/


/*let opcao = parseInt(prompt("Escolha o numero"))

switch (opcao) {
	case 1:
		document.write("Caso 1")
		break;
	
	case 2:
		document.write("Caso 2")
		break;
	
	default:
		break;
}
*/

//Exercicio de idade

// function classificar() {
 
// 			idade = parseInt(prompt('Digite a sua idade: '))
// 			if (idade >= 0 && idade < 15) {
// 				alert('Criança!')
// 			}
// 			else if (idade >= 15 && idade < 30) {
// 				alert('Jovem!')
// 			}
// 			else if (idade >= 30 && idade < 60) {
// 				alert('Adulto')
// 			}
// 			else if (idade >= 60) {
// 				alert('Idoso!')
// 			}
// 		}

// let var1 = 5
// let var2 = 5

// var1 = parseInt(var1)
// var2 = parseFloat(var2)

// console.log(var1)
// console.log(var2)

// document.write(var1.toString() + var2.toString())

// document.write(var1+var2)


// let notaF = prompt("Informe sua nota")
// let media = 7

// if (notaF >= media) {
//     document.write("<h1>APROVADO com a nota: </h1>")
// } else {
//     document.write("<h1>REPROVADO</h1>")
// }

// IF e ELSE

// if (4 <= 4) {
//     document.write("<h1>Verdadeiro</h1>")
// } else {
//     document.write("<h1>Falso</h1>")
// }

// DESAFIO PARA INVERTER A e B

// var a = 10
// var b = 20
// var c = null

// document.write("A: " + a + "<br>")
// document.write("B: " + b + "<br>")
// document.write("C: " + c + "<br>")

// document.write("<hr>")

// // Lógica de inversão dos valores das váriaveis A e B

// c = a
// a = b
// b = c
// c = null

// // RESPOSTA
// document.write("A: " + a + "<br>")
// document.write("B: " + b + "<br>")
// document.write("C: " + c + "<br>")