function solution(myString) {
    en = ['a','b','c','d','e','f','g','h','i','j','k']
    
    const result = en.reduce((acc, v) => {
        return acc.includes(v) ? acc.replaceAll(v, 'l') : acc
    },myString )
    
    return result
}
   