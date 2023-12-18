const fact = n => n === 0 ? 1 : n * fact(n - 1);

function solution(balls, share) {
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)))
}

