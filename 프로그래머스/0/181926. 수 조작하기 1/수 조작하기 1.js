function solution(n, control) {
    var arr = control.split('');
    
    for(i=0; i<arr.length; i++){
        switch(arr[i]){
            case 'w':
                n = n + (+1)
                break;
                
            case 's':
                n = n + (-1)
                break;

                
            case 'd':
                n = n + (+10)
                break;
                
            case 'a':
                n = n + (-10)
                break;

        }


    }
        return n
}