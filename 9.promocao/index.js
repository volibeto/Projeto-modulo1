


function solucao(precos) {
    //seu codigo aqui
    const menorPreco = Math.min(...precos);

    if (precos.length >= 3) {
        const desconto = menorPreco / 2
        precos[precos.indexOf(menorPreco)] -= desconto
    }
    const valorFinal = precos.reduce((total, preco) => total + preco)
    let final = Math.floor(valorFinal);

    console.log(final)
}



function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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