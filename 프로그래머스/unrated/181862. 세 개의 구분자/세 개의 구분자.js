function solution(myStr) {
    let res = myStr.split(/[a|b|c]/g).filter(a => a);
    return res.length ? res : ["EMPTY"];
}