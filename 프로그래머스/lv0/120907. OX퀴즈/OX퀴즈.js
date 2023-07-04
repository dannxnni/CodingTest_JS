function solution(quiz) {
    let answer = [];
    return quiz.map(t => {
        const [cal, res] = t.split(" = ");
        const sign = cal.includes("+") ? 1 : -1;
        const [a, b] = cal.split(sign === 1 ? " + " : " - ");
        return +a + (+b * sign) === +res ? "O" : "X"
    });
}