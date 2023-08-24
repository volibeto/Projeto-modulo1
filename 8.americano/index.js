

function solucao(numeros) {
    // seu codigo aqui
    let S = 0;
    for (let i = 0; i < numeros.length; i++) {
        S += numeros[i];
    }
    const posicaoGoleiro = (S - 1) % numeros.length + 1;
    console.log(posicaoGoleiro)
}

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10))
    }
    solucao(numeros)
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