function solution(array, n) {
    let answer = 0;
    
    //array 내부 숫자들과 n을 비교
    //n과 동일한 숫자가 있다면 answer에 1씩 더하기
    
    for( i of array) i === n ? answer+=1 : answer
    
    return answer;
}