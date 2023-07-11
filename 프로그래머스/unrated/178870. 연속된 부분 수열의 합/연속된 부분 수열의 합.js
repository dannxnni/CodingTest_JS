function solution(sequence, k) {
    var answer = [];
    var result = [];
    var sum = 0;
    var head = 0;
    var len = sequence.length;
    
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
        
        if (sum > k) {
            while (sum > k) {
                sum -= sequence[head++];
            }
        }
        if (sum === k) {
            answer.push([head, i]);
        }
    }
    
    answer.forEach(e => {
        if (len > (e[1] - e[0])) {
            len = e[1] - e[0];
            result = [e[0], e[1]];
        }
    })
    return result;
}