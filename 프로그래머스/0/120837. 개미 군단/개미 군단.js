function solution(hp) {

    Ant5 =parseInt(hp / 5)
    Ant3 = parseInt((hp %= 5) / 3)
    Ant1 = parseInt((hp %= 3) / 1)
  
    
    return Ant5 + Ant3 + Ant1
}