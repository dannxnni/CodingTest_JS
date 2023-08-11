function solution(a, b) {
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const year = 2016;
    const month = a;
    const day = b;
    const date = `${year}-${month}-${day}`;
    
    return week[new Date(date).getDay()];
}