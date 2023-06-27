function solution(array) {
    const mid = Math.floor(array.length / 2);
    const sort_array = array.sort((a, b) => a - b);
    return sort_array[mid];
}