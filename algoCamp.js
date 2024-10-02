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

// 문제7. 캐릭터의 좌표
// https://school.programmers.co.kr/learn/courses/30/lessons/120861
// 풀이1.
function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      if (x > -maxX) x--;
    } else if (keyinput[i] === "right") {
      if (x < maxX) x++;
    } else if (keyinput[i] === "up") {
      if (y < maxY) y++;
    } else if (keyinput[i] === "down") {
      if (y > -maxY) y--;
    }
  }

  return [x, y];
}

//풀이2. switch 문을 이용한 풀이
function solution(keyinput, board) {
  let res = [0, 0];
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (res[0] > -maxX) res[0]--;
        break;
      case "right":
        if (res[0] < maxX) res[0]++;
        break;
      case "up":
        if (res[1] < maxY) res[1]++;
        break;
      case "down":
        if (res[1] > -maxY) res[1]--;
        break;
    }
  }
  return res;
}

// 문제 8. 저주의 숫자 3
// https://school.programmers.co.kr/learn/courses/30/lessons/120871
// 풀이 1.
function solution(n) {
  let count = 0;
  let num = 0;

  while (count < n) {
    num++;

    if (num % 3 !== 0 && !String(num).includes("3")) {
      count++;
    }
  }

  return num;
}

// 문제9. url 라우트 매칭 및 파라미터 추출하기
//풀이 1.
function solution3(route, path) {
  let answer = { matches: true, params: {} };
  const routeArr = route.split("/");
  const pathArr = path.split("/");

  for (let i = 1; i < routeArr.length; i += 2) {
    if (routeArr[i] !== pathArr[i]) {
      answer = { matches: false };
      return answer;
    }
  }

  for (let i = 2; i < routeArr.length; i += 2) {
    answer.params[routeArr[i].slice(1, -1)] = pathArr[i];
  }

  return answer;
}

//풀이 2.
function solution(route, path) {
  let answer = { matches: true, params: {} };
  const routeArr = route.split("/");
  const pathArr = path.split("/");

  if (routeArr.length !== pathArr.length) {
    return { matches: false };
  }

  for (let i = 0; i < routeArr.length; i++) {
    if (routeArr[i].startsWith("[") && routeArr[i].endsWith("]")) {
      const paramName = routeArr[i].slice(1, -1);
      answer.params[paramName] = pathArr[i];
    } else if (routeArr[i] !== pathArr[i]) {
      return { matches: false };
    }
  }

  return answer;
}
// 출력 예시
// console.log(
//   solution(
//     "/service/[serviceId]/deployment/[deploymentId]",
//     "/service/1/deployment/9"
//   )
// );
// // 출력: {"matches":true,"params":{"serviceId":"1","deploymentId":"9"}}

// console.log(
//   solution(
//     "/service/[serviceId]/deployment/[deploymentId]",
//     "/service/1/project/9"
//   )
// );
// // 출력: {"matches":false}

// console.log(solution("/user/[userId]/profile", "/user/123/profile"));
// // 출력: {"matches":true,"params":{"userId":"123"}}

// 문제 10.

const codeOwnersMap = {
  scripts: ["김밥"],
  services: {
    "business-ledger": ["김연주", "백혜림"],
    "toss-card": ["김연주", "문정은"],
    payments: ["문정은"],
  },
};

function solution(obj, path) {
  const pathArr = path.split("/");
  let copyObj = { ...obj };

  for (let i = 0; i < pathArr.length; i++) {
    copyObj = copyObj[pathArr[i]];
  }

  return copyObj;
}

/* 에시 실행 결과 */
// solution(codeOwnersMap, "scripts");
// // ['김밥']

// solution(codeOwnersMap, "services/business-ledger");
// // ["김연주", "백혜림"]

// solution(codeOwnersMap, "services/payments");
// // ['문정은']

// solution(codeOwnersMap, "services/non-existent");

// 문제 11.

async function fetchExperts() {
  return ["백혜림", "문정은", "김연주"];
}

async function fetchIsExpertOnline(name) {
  const onlineExperts = { 백혜림: true, 문정은: false, 김연주: true };
  return new Promise((resolve) => {
    setTimeout(() => resolve(onlineExperts[name]), Math.random() * 70 + 50);
  });
}

async function solution3(fetchExperts, fetchIsExpertOnline) {
  // 1. 전문가 목록을 받아옴
  const experts = await fetchExperts();

  // 2. 병렬로 각 전문가의 온라인 상태 확인 (Promise.all 사용)
  const onlineStatuses = await Promise.all(
    experts.map((expert) => fetchIsExpertOnline(expert))
  );

  // 3. 온라인 상태인 전문가만 필터링하여 반환
  return experts.filter((expert, index) => onlineStatuses[index]);
}

// solution 함수 실행
// solution3(fetchExperts, fetchIsExpertOnline).then(console.log);

//문제 12.

function parseSearch(search) {
  let result = {};
  let queryParamStr = search.split("?")[1];
  if (!queryParamStr) return {};
  const queryParamArr = queryParamStr.split("&");

  for (let queryParam of queryParamArr) {
    const key = queryParam.split("=")[0];
    const value = queryParam.split("=")[1];
    let tempValue = result[key];

    if (!tempValue) {
      result[key] = value;
    } else {
      if (Array.isArray(tempValue)) {
        //배열일 경우
        result[key] = [...tempValue, value];
      } else {
        // 배열이 아닐경우
        result[key] = [tempValue, value];
      }
    }
  }
  return result;
}

// console.log(parseSearch("")); //출력: {}
// console.log(parseSearch("?from=twitter")); //출력: {"from": "twitter"}
// console.log(parseSearch("?range=1&range=8")); //출력: {"range": ["1", "8"]}
// console.log(parseSearch("?from=facebook&from=ad")); //출력: {"from": ["facebook", "ad"]}
// console.log(parseSearch("?from=facebook&from=ad&from=cc")); //출력: {"from": ["facebook", "ad"]}
// console.log(parseSearch("?from=facebook&from=ad&age=18&age=33")); //출력: {"from": ["facebook", "ad"]}

// 문제 13. 배열 조각하기
//https://school.programmers.co.kr/learn/courses/30/lessons/181893

// 풀이 1. 배열을 자르는 방식
function solution(arr, query) {
  let answer = [...arr];

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      answer = answer.slice(0, query[i] + 1);
    } else {
      answer = answer.slice(query[i]);
    }
  }

  return answer;
}

// 풀이 2. 인덱스의 범위를 추적하는 방식 (2번 방법이 더 효율적인 방식)
function solution(arr, query) {
  let startIdx = 0;
  let endIdx = arr.length;

  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      endIdx = startIdx + query[i] + 1;
    } else {
      startIdx = startIdx + query[i];
    }
  }

  return arr.slice(startIdx, endIdx);
}

// 문제 14. 배열 만들기 2

// 풀이 1. 재귀함수 사용한 풀이
function solution(l, r) {
  let answer = [];

  function generate(num) {
    if (r < num) return;

    if (num >= l && num <= r) {
      answer.push(num);
    }

    generate(num * 10 + 0);
    generate(num * 10 + 5);
  }

  generate(5);

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

// 풀이 2. 반복문으로 1부터 이진수로 변환 후, 1을 5로 바꾸는 작업.
function solution(l, r) {
  let answer = [];

  for (let i = 1; ; i++) {
    let num = parseInt(i.toString(2).replace(/1/g, "5")); // 이진법으로 바꾼 후,

    if (num > r) break;

    if (num >= l) {
      answer.push(num);
    }
  }

  return answer.length > 0 ? answer : [-1];
}

function solution(polynomial) {
  let xSum = 0;
  let intSum = 0;
  const allArr = polynomial.split(" + ");

  for (let i = 0; i < allArr.length; i++) {
    if (allArr[i].includes("x")) {
      let indexOfX = allArr[i].indexOf("x");
      if (indexOfX > 0) {
        xSum += Number(allArr[i].slice(0, indexOfX));
      } else if (indexOfX === 0) {
        xSum += 1;
      }
    } else {
      intSum += Number(allArr[i]);
    }
  }

  let terms = [];

  if (xSum !== 0) {
    terms.push(xSum === 1 ? "x" : `${xSum}x`);
  }

  if (intSum !== 0) {
    terms.push(`${intSum}`);
  }

  return terms.join(" + ") || "0";
}

// solution("3x + 7 + x"); // "4x + 7"
// solution("x + x + x"); // "3x"

// 문제 15. 유한소수 판별하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120878
// 풀이 1.
function solution(a, b) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const divisor = gcd(a, b);
  a /= divisor;
  b /= divisor;

  let num = b;
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 5 === 0) {
      num /= 5;
    } else {
      return 2;
    }
  }

  return 1;
}

// 풀이 2.
function solution(a, b) {
  // 최대공약수(GCD) 계산 함수
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // 기약분수로 만들기
  const divisor = gcd(a, b);
  b /= divisor;

  // 분모의 소인수 검사
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  // b가 1이면 유한소수, 아니면 무한소수
  return b === 1 ? 1 : 2;
}

// 문제 16. OX퀴즈
// https://school.programmers.co.kr/learn/courses/30/lessons/120907
// 풀이1.
function solution(quiz) {
  let answer = [];

  const quizArr = quiz.map((item) => {
    return item.split(" = ");
  });

  quizArr.map((item) => {
    let calc = new Function("return " + item[0])();
    let correctCalc = calc === Number(item[1]) ? true : false;

    if (correctCalc) {
      answer.push("O");
    } else if (!correctCalc) {
      answer.push("X");
    }
  });

  return answer;
}

// 풀이2. (조금 더 간단하다.)
function solution(quiz) {
  let answer = quiz.map((item) => {
    const [left, right] = item.split(" = ");
    let calcLeft = new Function("return " + left)();
    return calcLeft == right ? "O" : "X";
  });
  return answer;
}
