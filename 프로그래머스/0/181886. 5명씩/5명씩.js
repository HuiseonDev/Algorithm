function solution(names) {
    arr = []
    for(i=0; i<names.length; i+=5){
        let one =names.slice(i, i + 5)
        arr.push(one[0])
    }
    return arr
}