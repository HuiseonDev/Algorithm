function solution(date1, date2) {
    return date1.map((v) => ('' + v).length === 1 ? '0' + v : v).join('') <
            date2.map((v) => ('' + v).length === 1 ? '0' + v : v).join('') ? 1 : 0 
            
}