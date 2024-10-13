// BFS: 너비우선탐색(Breadth-first-search)
// 너비를 우선으로 탐색하는 알고리즘
// 너비우선 탐색은 최단경로를 찾아주는 알고리즘
// 최단 길이를 보장해야 할 때 많이 사용.
// 큐(queue) 를 사용함

// 처음에 시작노드를 큐에 삽입하면서 시작
// 시작노드를 방문하면 방문처리를 해준다.
// 1234567 순서(가까운 노드부터 탐색한다.)

// 예제 1.
const graph = {
  상훈: ["철수", "영희"],
  철수: ["상훈", "영철"],
  영희: ["상훈", "희재", "민식"],
  영철: ["철수"],
  희재: ["영희", "수연"],
  민식: ["영희", "희재"],
  수연: ["희재", "지희"],
  지희: ["수연"],
};

function bfs(graph, startNode, targetNode) {
  const visited = {}; // 방문할 정점을 저장할 객체
  const queue = []; // 탐색할 정점을 지정할 큐
  const distances = {}; // 시작 정점으로부터의 거리를 저장할 객체

  visited[startNode] = true; // 시작 정점을 방문 처리
  queue.push(startNode); // 시작 정점을 큐에 추가
  distances[startNode] = 0; // 시작 정점까지의 거리는 0

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 정점을 하나씩 추출
    console.log(node);

    if (node === targetNode) {
      return distances[node]; // 목표 정점에 도달한 경우 거리 반환
    }

    const adjacentNodes = graph[node]; //인접한 정점들을 가져옴
    for (let i = 0; i < adjacentNodes.length; i++) {
      let adjacentNode = adjacentNodes[i];
      if (!visited[adjacentNode]) {
        // 방문하지 않은 정점인 경우
        visited[adjacentNode] = true; //방문 처리
        queue.push(adjacentNode);
        distances[adjacentNode] = distances[node] + 1;
      }
    }
  }
  return -1;
}

const shortestDistance = bfs(graph, "상훈", "수연");
console.log(`상훈에서 수연까지의 최단 거리 : ${shortestDistance}`);

// // visited 객체를 제거하고, distances 와 통합한 코드
// function bfs(graph, startNode, targetNode) {
//   const queue = [];
//   const distances = {}; // 방문 여부와 거리 저장을 하나로 통합

//   queue.push(startNode);
//   distances[startNode] = 0; // 시작 노드까지의 거리는 0

//   while (queue.length > 0) {
//     const node = queue.shift();

//     // 목표 노드에 도달하면 그 거리 반환
//     if (node === targetNode) {
//       return distances[node];
//     }

//     const adjacentNodes = graph[node];
//     for (let adjacentNode of adjacentNodes) {
//       if (distances[adjacentNode] === undefined) {
//         // 방문하지 않은 노드만 처리
//         queue.push(adjacentNode);
//         distances[adjacentNode] = distances[node] + 1; // 거리 갱신
//       }
//     }
//   }

//   return -1; // 목표 노드에 도달하지 못한 경우
// }

// const shortestDistance = bfs(graph, "상훈", "수연");
// console.log(`상훈에서 수연까지의 최단 거리 : ${shortestDistance}`);

const graph2 = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야 할 노드들

  needVisit.push(startNode); // 노드 탐색 시작
  console.log(needVisit);

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // queue 기 때문에 선입선출, pop 이 아닌 shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적이 없다면,
      visited.push(node);
      console.log(node)
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(BFS(graph2, "D"));
