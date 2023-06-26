const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const split = [...str];
    const res = split.map(a => {
        const codeAt = a.charCodeAt()
        if (codeAt >= 97)   return a.toUpperCase()
        return a.toLowerCase()
    })
    console.log(res.join(""));
});