function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for (let i of db) {
        if (id === i[0] && pw === i[1])   return "login";
        else if (id === i[0] && pw !== i[1])   return "wrong pw";
    }
    return "fail";
}
    