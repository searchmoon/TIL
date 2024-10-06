// 문제 21. 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 풀이 1.
function solution(n) {
  let answer = 0;

  for (let char of String(n)) {
    answer += Number(char);
  }

  return answer;
}

//풀이 2. 인자를 문자열로 변환 후, 하나씩 잘라서 배열에 담기 -> reduce 를 사용해서 더해준 값 반환.
function solution(n) {
  const arr = (n + "").split("");
  return arr.reduce((sum, crr) => (sum += Number(crr)), 0);
}

// solution(123) // 6
// solution(987) // 24

// 문제 22. x만큼 간격이 있는 n개의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 풀이 1. Array().fill() 사용해서, 미리 배열의 모양을 만들어주고, map 으로 계산해준다.
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// 풀이 2. 기본 문법
function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// 문제 23. 나머지 한 점
// https://school.programmers.co.kr/learn/courses/18/lessons/1878

// 풀이1. 생성자 Map 을 이용한 풀이
function solution(v) {
  const Xmap = new Map();
  const Ymap = new Map();

  for (let i = 0; i < v.length; i++) {
    Xmap.set(v[i][0], Xmap.get(v[i][0]) ? Xmap.get(v[i][0]) + 1 : 1);
    Ymap.set(v[i][1], Ymap.get(v[i][1]) ? Ymap.get(v[i][1]) + 1 : 1);
  }

  const x = [...Xmap].find(([key, value]) => value === 1)[0];
  const y = [...Ymap].find(([key, value]) => value === 1)[0];

  return [x, y];
}

// 풀이2. 객체를 이용한 풀이
function solution(v) {
    const xMap = {};
    const yMap = {};

    for (let i = 0; i < v.length; i++) {
        xMap[v[i][0]] = (xMap[v[i][0]] || 0) + 1;
        yMap[v[i][1]] = (yMap[v[i][1]] || 0) + 1;
    }

    const x = Object.keys(xMap).find(key => xMap[key] === 1);
    const y = Object.keys(yMap).find(key => yMap[key] === 1);

    return [Number(x), Number(y)];
}

// 문제 24. 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910
//풀이. filter를 이용한 풀이
function solution(arr, divisor){
    let answer = arr.filter(int => int % divisor === 0);
    return answer.length === 0 ? [-1]: answer.sort((a, b) => a - b);
}

// 문제 25. 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 풀이

function solution(numbers){
    let answer = 0;
    // 이부분은
    let arr = [];
    
    for(let i = 0; i < 10; i++){
        arr.push(i);
    }
    // 1. const arr = new Array(10).fill().map((_, i) => i);
    // 2. const arr = [...Array(10).keys()]; 
    // 이렇게 더 간단하게 작성할 수 도 있다.

    for(let num of arr){
        if(!numbers.includes(num)){
            answer += num;
        }
    }

 return answer;   
}

// 문제 26. 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// 풀이
function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer;
}

// 문제 27. 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943
// 풀이
function solution(num) {
    let count = 0;
    
    while(num !== 1){
        if(num%2 === 0){
            num = num / 2;
        } else {
            num = num * 3 +1;
        }
        count ++;
    }
    
    if (count >= 500) {
        return -1;
    } else {
        return count;
    }
}
