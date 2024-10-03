// 문제 21. 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 풀이 1.
function solution(n) {
    let answer= 0;
    
    for(let char of String(n)){
        answer += Number(char);
    }

    return answer;
}

//풀이 2. 인자를 문자열로 변환 후, 하나씩 잘라서 배열에 담기 -> reduce 를 사용해서 더해준 값 반환.
function solution(n){
    const arr = (n+"").split("");
    return arr.reduce((sum, crr) => sum += Number(crr), 0);
}

// solution(123) // 6
// solution(987) // 24

// 문제 22. x만큼 간격이 있는 n개의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 풀이 1. Array().fill() 사용해서, 미리 배열의 모양을 만들어주고, map 으로 계산해준다.
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
// 풀이 2. 기본 문법
function solution(x, n) {
    let answer = [];
    
    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }

    return answer;
}

