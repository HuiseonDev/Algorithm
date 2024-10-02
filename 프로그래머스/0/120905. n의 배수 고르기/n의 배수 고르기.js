function solution(n, numlist) {
    //numlist의 numlist의 length만큼 for문을 돈다
    //for문을 돈 값을 numlist의 index값으로 부여한다
    //해당 numlist값을 n으로 나눴을 때 나머지가 0인것들을 빈배열에 추가한다
        var answer = [];
    
    for(i=0; i<numlist.length; i++) {
        if (numlist[i] % n === 0){
            answer.push(numlist[i])
        }
    }

    return answer;
}