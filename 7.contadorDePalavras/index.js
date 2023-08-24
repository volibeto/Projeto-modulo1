

function solucao(texto) {
    // Seu codigo aqui
    const palavras = texto.trim().split(' ').filter(palavra => palavra !== '')

    console.log(palavras.length)

}

function processData(input) {
    solucao(input)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});