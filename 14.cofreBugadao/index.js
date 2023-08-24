function processData(input) {
    //Enter your code here
    const [senhaCorreta, senhaDigitada] = input.trim().split('\n')
    let indice = 0
    let resultado = "NAO"

    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] === senhaCorreta[indice]) {
            indice++
        }

        if (indice === senhaCorreta.length) {
            resultado = "SIM"
            break
        }
    }

    console.log(resultado);
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
