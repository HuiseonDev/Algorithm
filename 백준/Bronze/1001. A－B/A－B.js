const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const num = input.split(" ").reduce((a, c) => Number(a) - Number(c));

console.log(num);
