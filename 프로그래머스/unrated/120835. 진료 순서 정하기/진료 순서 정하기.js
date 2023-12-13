function solution(emergency) {
    let sort_em = [...emergency].sort((a, b) => b - a);
    return emergency.map(val => sort_em.indexOf(val) + 1);
}