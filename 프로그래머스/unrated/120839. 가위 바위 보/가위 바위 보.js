function solution(rsp) {
    const dict = {
        2 : 0,
        0 : 5,
        5 : 2
    };
    return [...rsp].map(a => dict[a]).join("");
}