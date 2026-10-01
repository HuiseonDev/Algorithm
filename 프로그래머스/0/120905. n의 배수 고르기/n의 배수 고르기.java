import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int n, int[] numlist) {
        List<Integer> intList = new ArrayList<>();
         System.out.println(intList);
        
        for(int num:numlist){
            if(num % n == 0){
                intList.add(num);
            }
        }
        return intList.stream().mapToInt(v -> v).toArray();
    }
}