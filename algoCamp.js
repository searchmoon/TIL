// 1. 수열과 구간 쿼리 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181883
function solution(arr, queries) {
  let answer = [...arr];

  for (let query of queries) {
    const [first, second] = query;

    for (let i = first; i <= second; i++) {
      answer[i] += 1;
    }
  }

  return answer;
}

// [...arr] 로 원본 배열을 복사하여서 변경하고,
// queries 의 원소인 query 를 first, second 로 구조분해할당.
// first, second 사이에 있는 answer 배열의 요소에 각각 1씩 더해주는 반복문 실행

// 2. 수열과 구간 쿼리 4
// https://school.programmers.co.kr/learn/courses/30/lessons/181922
// 풀이 1.
function solution(arr, queries) {
  let answer = [...arr];

  for (let query of queries) {
    const [first, second, third] = query;

    for (let i = first; i <= second; i++) {
      if (i % third === 0) {
        answer[i]++;
      }
    }
  }

  return answer;
}
// 이풀이는 실행속도가 너무 느리다.

// 풀이 2.
function solution(arr, queries) {
  let answer = [...arr];

  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        answer[i]++;
      }
    }
  });

  return answer;
}
// forEach를 통해 약간의 속도 개선
