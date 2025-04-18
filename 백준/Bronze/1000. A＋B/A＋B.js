const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const test = input.split(" ").reduce((acc, arr) => {
  return Number(acc) + Number(arr);
});
console.log(test);
