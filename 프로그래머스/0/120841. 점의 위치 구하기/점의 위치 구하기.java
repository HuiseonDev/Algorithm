class Solution {
    public int solution(int[] dot) {
        if(dot[0] > 0 ){
            return dot[1] > 0 ? 1 : 4;
        } else if (dot[0] < 0){
            return dot[1] < 0 ? 3 :2 ;
        }
        return 0;
    }
}