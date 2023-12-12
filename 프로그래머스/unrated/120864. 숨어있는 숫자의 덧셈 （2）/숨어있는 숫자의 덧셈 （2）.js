function solution(my_string) {
    let n = my_string.match(/\d+/g);
    if (n) {
        return n.reduce((a, b) => a + parseInt(b), 0);
    }
    return 0;
}