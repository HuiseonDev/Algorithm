function solution(s){
let ListP = []
let ListY = []
    s.toUpperCase().split('').filter((v) => v === 'P' ? ListP.push(v) : v === 'Y' ? ListY.push(v) : '')
return ListP.length === ListY.length ? true : false;

}