function solution(my_string) {

    const en = ['a','e','i','o','u']
    const arr = []
    
    //my_string.split('') 각 문자가 담긴 배열을 순회
    //en과 일치하는 단어가 있는지 확인
    //일치하지 않는 문자를 새로운 배열에 치환

    

    const newArr = my_string.split('').map((item)=> item.includes('a') 
                            ? 1 : item.includes('e') 
                            ? 1 : item.includes('i')
                            ? 1 : item.includes('o')
                            ? 1 : item.includes('u')
                            ? 1 : item).join('').split(1)
    return newArr.join('')

    

    
}