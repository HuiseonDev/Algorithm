function solution(phone_number) {
    let otherNum = phone_number.length - 4;
    return '*'.repeat(otherNum) + phone_number.slice(-4)
}