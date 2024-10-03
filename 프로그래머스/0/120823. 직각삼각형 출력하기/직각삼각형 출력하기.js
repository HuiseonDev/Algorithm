const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let star = []

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0])
    for(i=1; i<=num; i++){
       star.push("*")
        console.log( star.join('') )
    
        //*이 i만큼 추가된다
        
    }
});