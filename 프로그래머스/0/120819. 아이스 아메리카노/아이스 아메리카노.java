class Solution {
    public int[] solution(int money) {
        int[] arr = new int[2];
        arr[0] = money / 5500;
        arr[1] = money % 5500;
        return arr;
    }
}