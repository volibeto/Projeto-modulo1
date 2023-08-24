

function solucao(cartaParaCima) {
    //seu codigo aqui
    let manilha = ` `

    if (cartaParaCima === `Q`) {
        manilha = `J`
    } else if (cartaParaCima === 'J') {
        manilha = 'K'
    } else if (cartaParaCima === `K`) {
        manilha = `A`
    } else if (cartaParaCima === `A`) {
        manilha = `2`
    } else if (cartaParaCima === `2`) {
        manilha = `3`
    } else if (cartaParaCima === `3`) {
        manilha = `Q`
    }
    console.log(manilha)


}








function processData(input) {
    solucao(input);
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