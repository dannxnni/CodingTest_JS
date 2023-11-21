function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    if (len1 !== len2)  return len1 > len2 ? 1 : -1;
    
    let sum1 = arr1.reduce((a, c) => a + c, 0);
    let sum2 = arr2.reduce((a, c) => a + c, 0);
    if (sum1 === sum2)  return 0;
    return sum1 > sum2 ? 1 : -1;
}