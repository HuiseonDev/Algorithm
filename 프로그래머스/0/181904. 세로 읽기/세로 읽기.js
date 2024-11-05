function solution(my_string, m, c) {
    const newarr = my_string.split('').reduce((acc,cur,index) => {
        index % m === 0 ? acc.push([cur]) : acc[acc.length - 1].push(cur)
        return acc
    },[])
    return newarr[0].length === 1 
        ? my_string 
        : (newarr.map((v) => v[c - 1])).join('')

}