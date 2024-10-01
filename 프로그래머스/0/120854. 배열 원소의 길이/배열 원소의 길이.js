function solution(strlist) {
    let answer = [];
    
    //strlist의 내부 원소들의 문자 길이를 잰다
    //각 원소들의 문자 길이를 answer 배열에 담는다
    
    for ( i=0; i<strlist.length; i++ ){
        
        //빈 새로운 배열에 몇개의 원소가 있는지 i로 입력
        //strlist의 문자 길이를 체크
        // 빈 배열에 strlist 문자 길이 입력
        answer[i] = strlist[i].length;
    }
    
    return answer;
}