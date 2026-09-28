class Solution {
    public int solution(int n) {
        
        int count = 0;
        
        for(int i=1; i<=n; i++){
            count += (n % i == 0) ? 1 : 0;
        }
        return count;
    }
}