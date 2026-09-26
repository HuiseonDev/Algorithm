class Solution {
    public double solution(double slice, double n) {
       return slice > n ? 1 : Math.ceil(n / slice);
    }
}