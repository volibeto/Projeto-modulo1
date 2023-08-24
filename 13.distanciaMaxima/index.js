function processData(input) {
    //Enter your code here
    const linhas = input.trim().split('\n')
    const N = parseInt(linhas[0])
    const coordenadas = linhas.slice(1).map(line => line.split(' ').map(Number))

    let distanciaMaxima = 0


    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const distancia = Math.hypot(coordenadas[i][0] - coordenadas[j][0], coordenadas[i][1] - coordenadas[j][1])
            //Math.hypot calcula a distancia entre dois pontos 
            distanciaMaxima = Math.max(distanciaMaxima, distancia)
        }
    }

    console.log(distanciaMaxima.toFixed(10))
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
