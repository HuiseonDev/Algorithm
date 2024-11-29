function solution(array, height) {
    //array = 반 친구들의 키 가 담긴 정수 배열
    //height = 머쓱이의 키
    
    //array를 돌면서 height와 하나씩 비교한다
    //array 중 Height보다 큰 수를 반환
    //반환한 숫자의 개수를 출력
    
    let answer = 0;
    for( i of array) i > height ? answer+=1 : answer
    return answer;
}