function processData(input) {
    //Enter your code here
    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
        console.log(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
    } else {
        console.log(input);
    }
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