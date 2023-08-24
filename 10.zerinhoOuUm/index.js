

function solucao(jogadores) {
    //seu codigo aqui
    const jogadoresZero = jogadores.filter((jogador) => jogador.jogada === 0)
    const jogadoresUm = jogadores.filter((jogador) => jogador.jogada === 1)

    if (jogadoresZero.length === 1) {
        console.log(jogadoresZero[0].nome)
    } else if (jogadoresUm.length === 1) {
        console.log(jogadoresUm[0].nome)
    } else {
        console.log(`NINGUEM`)
    }
}

function processData(input) {
    solucao(JSON.parse(input));
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
