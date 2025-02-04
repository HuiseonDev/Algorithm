function solution(arr) {
    ex = 0; 
    while(Math.pow(2,ex) < arr.length) ex ++;
    return arr.concat(Array( 2 ** ex - arr.length).fill(0))
}