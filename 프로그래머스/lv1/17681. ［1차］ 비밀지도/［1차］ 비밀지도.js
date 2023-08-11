function solution(n, arr1, arr2) {
    let nArr1 = [];
    let nArr2 = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let dec1 = arr1[i];
        let dec2 = arr2[i];
        
        let bin1 = dec1.toString(2).padStart(n, 0);
        let bin2 = dec2.toString(2).padStart(n, 0);
        
        nArr1.push(bin1.split("").map(i => Number(i)));
        nArr2.push(bin2.split("").map(i => Number(i)));
    }
    let ans = [];
    
    for (let i = 0; i < nArr1.length; i++) {
        let str = "";
        for (let j = 0; j < nArr1[i].length; j++) {
            if (nArr1[i][j] === 0 && nArr2[i][j] === 0) str += " ";
            else if (nArr1[i][j] === 1 || nArr2[i][j] === 1) str += "#";
        }
        ans.push(str);
    }
    return ans;
}