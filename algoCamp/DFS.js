// DFS: 깊이우선탐색(depth-first-search)
// 깊은 것을 우선적으로 하여 탐색하는 알고리즘.
// 깊이우선탐색: 스택 사용, 너비우선탐색: 큐 사용
// 스택을 직접 사용하지 않고, 재귀 함수를 이용해 간략하게 dfs 함수를 구현할 수 있다.

// 예제1. 미로탐색
// S(start)부터 시작해서 E(end) 까지 탐색하기
// 1은 벽이라고 생각하면 됨. 1은 지나갈 수 없다.
// 아래의 예에서 maze 의 배열의 첫원소인 첫번째 배열에서 s부터 시작하면, 우측으로 탐색을 하기 시작한다.
// 첫 시작때, S의 한쪽 줄에서 오른쪽으로 끝까지 간다는 뜻
// 즉, maze[0][0]에서 S 옆의 0 탐색, 오른쪽이 1로 막혀있으니깐, 아래쪽으로 탐색,
// 또 오른쪽으로 한칸, 오른쪽으로 한칸, 위쪽으로 한칸, 오른쪽으로 한칸. 해서 해당 배열의
// 0인 숫자를 모두 탐색하기.
let maze = [
  ["S", 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, "E", 0],
  [1, 1, 1, 0, 1, 0],
];

//path: 이전에 지나왔던 길을 저장하는것.
function dfs(maze, position = [0, 0], path = []) {
  let [x, y] = position;
  if (maze[x][y] === "E") return [...path, position];

  let directions = [
    // 상하좌우만 이동할 수 있다고 가정
    [0, 1], // 하
    [0, -1], // 상
    [1, 0], // 우
    [-1, 0], // 좌
  ];

  for (let [dx, dy] of directions) {
    let newX = x + dx;
    let newY = y + dy;
    if (
      newX >= 0 && // x의 좌표가 0보다 작으면 왼쪽 벽을 뚫고 나가는거니깐 이 조건
      newX < maze.length && // x의 좌표가 인덱스를 넘어가면 오른쪽 벽을 뚫고 나가는거니깐 이 조건
      newY >= 0 && // y도 마찬가지
      newY < maze[0].length &&
      (maze[newX][newY] === 0 || maze[newX][newY] === "E")
      // 0 또는 E에만 도달할수 있다. 1 또는 S는 안된다는 뜻
    ) {
      maze[x][y] = 1; // 방문한 곳을 표시. 1로 강제해준다.
      let result = dfs(maze, [newX, newY], [...path, position]);
      if (result) return result;
    }
  }
  return null;
}

console.log(dfs(maze));
