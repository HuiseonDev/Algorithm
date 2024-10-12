function solution(numbers, direction) {
    if(direction === 'right'){
        let last = numbers.pop()
        numbers.unshift(last)
    }else{
        let start = numbers.shift()
        numbers.push(start)
    }
    return numbers
}