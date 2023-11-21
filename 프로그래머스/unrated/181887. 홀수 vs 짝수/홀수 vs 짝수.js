function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    num_list.map((v, i) => {
        i % 2 === 0 ? even += v : odd += v;
    });
    
    return Math.max(even, odd);
}