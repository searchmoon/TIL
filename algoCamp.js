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

// 문제 4. 두 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181846

// 풀이
function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

// 문제 5. 무작위로 K개의 수 뽑기

//풀이
function solution(arr, k) {
  const set = new Set(arr);
  let newArr = [...set].slice(0, k);

  while (newArr.length < k) {
    newArr.push(-1);
  }

  return newArr;
}

// 문제 6. 안전한 PIN 번호 (4자리)
// 문제 설명: 4자리의 숫자중 같은 숫자가 3개 이상 나오지 않는 안전한 PIN 번호 찾기
// 실행 예시:
// console.log(solution2("0000")); // false
// console.log(solution2("1133")); // true
// console.log(solution2("1234")); // true

// 풀이 1. Map 생성자 사용
function solution(pin) {
  const map = new Map();
  const charArr = pin.split("");

  let answer = true;

  charArr.map((item) => {
    if (!map.get(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  });

  for (const value of map.values()) {
    if (value >= 3) {
      return false;
    }
  }

  return answer;
}

//풀이 2. 객체를 사용한 방식
function solution(pin) {
  const countObj = {};

  for (let i = 0; i < pin.length; i++) {
    countObj[pin[i]] = (countObj[pin[i]] || 0) + 1;
    if (countObj[pin[i]] >= 3) {
      return false;
    }
  }

  return true;
}

//풀이 3. reduce, some, split 등의 메서드를 사용한 방식
function solution(pin) {
  const count = pin.split("").reduce((acc, digit) => {
    acc[digit] = (acc[digit] || 0) + 1;
    console.log(acc);
    return acc;
  }, {});
  console.log();

  return !Object.values(count).some((v) => v >= 3);
}
