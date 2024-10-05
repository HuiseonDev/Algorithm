function solution(arr) {
    return arr.map((v) => v >= 50 
                  ? v % 2 === 0 ? v / 2 : v
                  : v % 2 === 0 ? v : v * 2
                  )
}