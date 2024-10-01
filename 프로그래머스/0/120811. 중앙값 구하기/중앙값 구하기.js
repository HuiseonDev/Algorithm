function solution(array) {
    const sort = array.sort((a,b) => a-b)
    const index =  Math.floor(sort.length/2)
    return sort[index]
}

