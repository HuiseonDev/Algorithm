function solution(my_string, num1, num2) {
    return my_string.split('').map((v,i) => i === num1 ? v = my_string[num2] : i === num2 ? v = my_string[num1] : v).join('')
    
}