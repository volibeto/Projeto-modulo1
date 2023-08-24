


function solucao(lista) {
    // seu codigo aqui
    const maiorIdade = lista.filter((idade) => idade >= 18);

    if (maiorIdade.length === 0) {
        console.log('CRESCA E APARECA');
    } else {
        const maisJovem = maiorIdade.reduce((min, idade) => Math.min(min, idade));
        console.log(maisJovem)
    }
}




function processData(input) {
    //Enter your code here
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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
