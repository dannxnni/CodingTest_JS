function solution(phone_number) {
    var res = "*".repeat(phone_number.length-4) + phone_number.slice(-4);
    return res;
}