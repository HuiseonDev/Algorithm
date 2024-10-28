function solution(a, b, c) {
    
    if( a==b && a==c){
        console.log('모두같음')
        return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
        
    }else if ( a==b || a==c || b==c ){
        console.log('모두다름')
        return (a+b+c) * (a**2 + b**2 + c**2)
        
    }else{
        console.log('하나만 다름')
        return a+b+c
        
    }
    
}