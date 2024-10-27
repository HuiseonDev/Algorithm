function solution(age) {
    const Age = Array.from(String(age))
    return Age.map((v) => 'abcdefghij'[v]).join('')
}