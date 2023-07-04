function solution(array) {
    let map = new Map();
    
    // Map 초기화
    for (let i = 0; i <= Math.max(...array); i++) {
        map.set(i, 0);
    }
    
    // array 배열의 원소 값과 일치하는 Map 객체의 key를 증가시킴
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    // Map 객체의 value만 모아 배열 생성
    let arr = Array.from(map.values());
    
    // 최대값 산출
    let max = Math.max(...arr);
    
    // 최대값이 하나만 존재하면 max, 여러 개면 -1
    return arr.indexOf(max) !== arr.lastIndexOf(max) ? -1 : arr.indexOf(max);
}