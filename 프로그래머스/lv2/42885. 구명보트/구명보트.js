function solution(people, limit) {
    var ans = 0;
    
    people.sort((a, b) => b - a);
    let l = 0;
    let r = people.length - 1;
    
    while (l < r) {
        var sum = people[l] + people[r];
        if (sum > limit) {
            l++;    // 첫번째 사람만 배에 탑승
        } else {
            l++;    // 첫번째 사람과 마지막 사람 배에 탑승
            r--;
        }
        ans++;
    }
    if (l === r)    ans++;
    
    return ans;
}