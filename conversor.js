// PRIMEIRO PROJETO - CONVERSOR DE BINARIO PARA DECIMAL

//Função para converter o valor recebido (binário) para decimal
function converter(valorDigitado) {
	let bin = valorDigitado //criando a variavel com o valor recebido no input binário
	let dec = 0 // definindo e criando a variavel decimal para o valor 0
	for (let c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1] //loop para que a conta sejá resolvida começando pela direita para a esquerda
	document.getElementById("decimal").value = dec //retornar a variavel dec para o id decimal no html e com o innerHTML, mostrando o valor
}
