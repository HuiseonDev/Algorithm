function solution(my_string) {
    return my_string.match(/[0-9]/g).map((a) => Number(a)).reduce((a,b) =>(a+b))

    

}