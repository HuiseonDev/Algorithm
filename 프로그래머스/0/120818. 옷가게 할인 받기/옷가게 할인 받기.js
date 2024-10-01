function solution(price) {
   let a = parseInt(
        price >= 500000 
            ? price - (price * 0.2)  // 50만 원 이상이면 20% 할인
            : price >= 300000 
                ? price - (price * 0.1)  // 30만 원 이상이면 10% 할인
                : price >= 100000 
                    ? price - (price * 0.05)  // 10만 원 이상이면 5% 할인
                    : price // 그 외의 경우 할인이 적용되지 않음
    );
    
    return a;
}
