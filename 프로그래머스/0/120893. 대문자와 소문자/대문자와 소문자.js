function solution(my_string) {

    const array = []
    
    for( let i = 0; i< my_string.length; i++){
        
        if(my_string[i] === my_string[i].toLowerCase()){
            array.push(my_string[i].toUpperCase())
        }else{
            array.push(my_string[i].toLowerCase())
        }
    }
    

    
    return array.join('')

}