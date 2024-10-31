function solution(myString) {
    return myString.split('x').sort((a,b) => a.localeCompare(b)).filter((el) => el)
}