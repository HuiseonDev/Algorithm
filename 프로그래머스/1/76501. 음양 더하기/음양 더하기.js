function solution(absolutes, signs) {
    num = 0;
    for(let i=0; i <= (signs.length - 1); i++){
        signs[i] === true ? num += absolutes[i] : num -= absolutes[i]
    }
   return num
}


