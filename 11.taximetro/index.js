

function solucao(min, km) {
    //seu codigo aqui
    let valorTotal = 0

    let minutos = 0
    let klm = 0

    if (km > 10) {
        klm = (km - 10) * 50 + 10 * 70
    } else {
        klm = 70 * km
    }

    if (min > 20) {
        minutos = (min - 20) * 30 + 50 * 20
    } else {
        minutos = 50 * min
    }
    valorTotal = Math.floor(minutos + klm)

    console.log(valorTotal)
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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