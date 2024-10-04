function solution(my_string, n) {

    newArr= []
    const arr = my_string.split('')

    for(i=0; i<my_string.length; i++){
        for(a=1; a<=n; a++){
             newArr.push(arr[i])
        }
 
    }
    return newArr.join('');
}