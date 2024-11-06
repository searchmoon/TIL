< Next.js 정리 >
- 서버컴포넌트란?
- 서버컴포넌트의 이점: 서버컴포넌트를 통해 초기 페이지 로딩 속도가 향상되고, 클라이언트 js 번들 사이즈는 감소한다.
- App router 에서는 기본적으로 모든 컴포넌트가 server component가 default 이다. client component 로 사용하려면 use client 선언문을 통해 변경할 수 있다.
컴포넌트의 최상단 import 문들 위에 (제일 첫번째 줄) ‘use client’; 라고 선언해주면 그것이 클라이언트 컴포넌트가 되는것. 
use client 라고 선언을 해주고, 그 컴포넌트 내에서 사용되는 모든 하위컴포넌트들도 자동으로 클라이언트 컴포넌트로 간주된다.
- 서버 vs 클라이언트 컴포넌트 어떨때 쓰냐?
    - Server component
        - 데이터 fetching
        - 백엔드 자원에(직접적으로) 접근
        - 민감한 정보를 서버에서 유지(JWT, API Key 등등)
        - large dependencies를 서버에서 유지/클라이언트 JS 번들 사이즈 감소
    - Client component
        - interactivity, event listener(onClick 등)가 필요할때
        - state 및 라이프사이클이 필요할 때
        - browser-only API 사용
        - custom hook depend on state or browser-only API 사용
- client 컴포넌트는 최대한 트리구조에서 리프노드에 두는것이 좋다. 왜냐면, client로 선언하면, 그 아래의 컴포넌트들은 다 client 컴포넌트가 되기 때문에, interactive한 ui 만을 리프노드로써 client 컴포넌트로 만들자.
- client 컴포넌트안에 server 컴포넌트가 import 되어 사용될 수 없다.
→ 권장되는 패턴은, server 컴포넌트를 client 컴포넌트의 props 로 전달하는 방법이다.