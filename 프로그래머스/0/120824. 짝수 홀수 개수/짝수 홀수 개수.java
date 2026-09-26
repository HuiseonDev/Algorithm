import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        
    int[] arr = new int[2];
    int[] arr1 = Arrays.stream(num_list).filter(n -> n % 2 == 0).toArray();
    int[] arr2 = Arrays.stream(num_list).filter(n -> n % 2 == 1).toArray();
    arr[0] = arr1.length;
    arr[1] = arr2.length;
    return arr;
    }
}