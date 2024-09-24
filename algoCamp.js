// 문제 1. 수열과 구간 쿼리 1
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

// 문제 2. 수열과 구간 쿼리 4
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

// 문제 3. 영어가 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120894

// 풀이 1.
function solution(numbers) {
  let answer = 0;

  const numMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let tempWord = "";

  for (let char of numbers) {
    tempWord += char;

    if (numMap[tempWord] !== undefined) {
      answer += numMap[tempWord];
      tempWord = "";
    }
  }

  return parseInt(answer);
}
// 바로 문자열을 더해주는방식

// 풀이 2.
function solution(numbers) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }

  return +numbers;
}
