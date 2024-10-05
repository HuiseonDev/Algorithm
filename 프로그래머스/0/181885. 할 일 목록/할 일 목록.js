function solution(todo_list, finished) {
    arr =[]
    for(i=0; i<todo_list.length; i++){
        finished[i] === false ? arr.push(todo_list[i]) : ''
    }
    return arr
}