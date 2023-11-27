function solution(arr, queries) {
    for (query of queries) {
        const [i, j] = query;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}