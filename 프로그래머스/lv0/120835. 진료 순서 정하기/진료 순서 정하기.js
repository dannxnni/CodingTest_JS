function solution(emergency) {
    let em = emergency.slice().sort((a, b) => b-a);
    return emergency.map(v => em.indexOf(v) + 1);
}