function solution(n)
{
    let ars = String(n).split("").map(Number);
    return ars.reduce((acc,cur) => acc+cur ,  0)
}