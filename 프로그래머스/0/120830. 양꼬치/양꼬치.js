function solution(n, k) {
    //n = 12,000원 양꼬치
    //k = 2,000원 음료수
    //n을 10으로 나눴을때 나머지가 0이라면 k에 n을 나눈 몫만큼 빼준다
    
    return (n*12000)+(k*2000) - parseInt(n/10)*2000

}