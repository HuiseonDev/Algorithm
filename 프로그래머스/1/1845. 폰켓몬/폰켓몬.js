function solution(nums) {
    const t = new Set(nums).size
    return Math.min(t, nums.length / 2)
}