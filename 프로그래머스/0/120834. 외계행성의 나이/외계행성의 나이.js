function solution(age) {
    const Age = Array.from(String(age))
    const en = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return Age.map((v) => en[v]).join('')
}