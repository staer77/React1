# 202230126 이주환
1. 이름 학번 h1 제일 위에 기재
2. 날짜(주차)
3. 배운내용 & 코드
4. 최근 날짜가 제일 위로 올라오게

## 20260415 (7주차)
* 배열을 데이터로 렌더링 - JS의 filte() 함수를 사용하여 해당하는 값만 반환할 수 있음
* key prop은 배열 중 어떤 자식 요소인지 확인할수 있도록 함 - 자식 요소가 정렬 등으로 인해 이동, 삽입 혹은 삭제되어도 각 자식 요소를 구별하는데 중요하게 사용, 데이터가 정확히 무슨 일이 일어났는지 추론하고 DOM 트리를 올바르게 업데이트하는데 도움이 됨, 즉석으로 생성X 배열 안에 포함
* 컴포넌트 순수하게 유지하기 - 순수함수는 오직 연산만을 수행함
* 순수 함수란 같은 입력 값을 넣으면 항상 같은 결과를 반환하는 함수, 외부의 상태를 변경하지 않는 즉 SIDE Effect가 없는 함수를 의미함 -> 코드베이스가 커져도 예상 밖 동작이나 당황스러운 버그를 피할 수 있음
* 컴퓨터 과학에서 함수형 프로그래밍의 순수 함수는 호출되기 전에 존재했던 어떤 객체나 변수도 변경하지 않음, 같은 입력이 주어졌다면 순수 함수는 항상 같은 결과를 반환함
```
function double(number) {
  return 2 * number;
}
```
* Error : cannot reassign variables declared outside of the component/hook -> 컴파일러 규칙 준수하라는 거임

## 20260408 (6주차)
* 조건부 렌더링 - 컴포넌트는 조건에 따라 다른 항목을 표시해야 하는 경우가 많음
* JSX 중첩을 쉽게 할 수 있도록 속성을 다른 줄에 표시하거나, 소괄호 추가할 수 있음
* 삼항연산자 - 참일 때 일부 JSX 렌더링하고 거짓이면 아무것도 렌더링 하지 않음
```
 messageCount > 0 && <p>New messages</p>
 const heroes = ['','',''];
 const listHeroes = heroes.map(hero => <li>{hero}</li>);
 return <ul>{listHeroes}</ul>;
 ```
 
* 변수에 조건부로 JSX 할당하기
* 리스트 렌더링 - JS의 배열관련 함수를 사용해서 배열을 컴포넌트의 기능에 맞게 렌더링 할 수 있음


## 20260401 (5주차)
* Element는 DOM의 구성 단위, Attribute는 태그의 행동 제어 / 엘리먼트에 추가적인 정보 제공, property는 DOM 트리의 객체 내부에 존재하는 동적인 속성 / js 제어 및 현재의 동적상태를 의미
* js를 jsx에서 사용하는 법 -> 따옴표로 문자열 전달, js 변수 참조 / js 함수 호출 / js 객체 적용
* 데이터 전달과 렌더링 - props는 부모 컴포넌트가 자식으로 전달됨
* props 특징 - 일방 통행, 읽기 전용, 다양한 타입
* props로 객체 전달 - 데이터를 묶어서 객체형태로 자식 컴포넌트에 전달할 수 있음
* props 기본값 - {null}, {0}으로 전달됨
* JSX spread 문법으로 srops 전달 - 객체를 펼치는 문법 -> 가독성 저하, 불필요한 데이터 전달, 우선순위 문제

## 20260325 (4주차)
* vite에서 JS + SWC가 사라진 이유 - 260312 플러그인 관련 항목은 현재 실험적인 통합 단계이므로 이슈가 발생할 수 있음, SWC는 속도 문제를 많이 해결했음 근데 파싱 속도 3배 더 빠른게 있음 OXC
* SWC(Speedy web compiler) 트랜스파일링(TS->JS) 변들링에 특화
* OXC(Oxidation compiler) 트렌스파일러 등을 모두 대체하려는 고성능 도구 모음(Toolchain), 정적 분석 및 Linting에 매우 강점
* 컴포넌트 Nesting(중첩) 특징 컴포넌트를 다른 컴포넌트 안에서 호출하는 걸을 의미
* 렌더링 과정 App.jsx(component 1, 2, ...) -> main.jsx -> index.html
* 컴포넌트 import와 export - 분리된 컴포넌트는 export는 외부에서 사용할 수 있도록, 다른 컴포넌트 에서는 import 구문을 이용해 분리된 컴포넌트 사용
* Default Export and Named Export - 디폴트는 다른 이름으로 변수명 선언 이것을 로컬 식별자 혹은 변수명 / 네임드는 import하는 곳의 컴포넌트의 이름이 같아야 함 전북 혹은 일부만 import 가능
* named export -  모든 컴포넌트를 가져올 때 스타 기호(*) Namespace import 방식 이용, 변수명 바꾸고 싶을 때 as키워드 사용
* 개발 트렌드 Named Export 기본 사용 권장 그 이유는 일관성, 리팩토링 용이성 : 컴포넌트 이름 바꿀 때 에디터가 연결된 모든 파일의 이름을 한꺼번에 안전하게 바꿈, Tree Shaking : 사용하지 않는 코드 제거
* JSX 자바스크립트 확장 문법, WEb이 더욱 인터랙티브 해지면서 로직이 내용을 결정하는 경우가 ㅁ낳아짐

## 20260318 (3주차)
* 리액트는 작은 컴포넌트 단위로 개발함, 점진적으로 적용할 수 있도록 설계
* 설치 방법 node 검색해서 LTS version 다운 후 시스템 설치하고 버전 확인, node 설치하면 npm과 npx 함께 설치, 코드 에디터와 웹 브라우저만 준비하면 개발 환경 구축은 끝남
* node package manager / eXecuter 
* npm create vite@latest my-app, 리액트 컴파일러는 개발 중임
* npm create vite@latest my-app -- --template react-swc -> vite 최신버젼 프로젝트 이름 뒤에 나오는 명령어는 vite에 넘김 template 넘김 리액트 사용하고 트렌스는 swc를 사용
* 리액트 프로젝트 생성해도 git 초기화는 장도 아님 직접 해야함
* kebabcase -> hyphen 씀, git
* npm run dev, rm -rf node_*, 클론 받은 프로젝트의 경우 npm i
* 리액트 컴포넌트는 마크업을 함께 사용할 수 있는 자바스크립트 함수로 개발
* 컴포넌트가 많아지면 별도의 디렉토리를 생성해서 관리
* app.jsx 사용 - 이미지 출력하는 간단한 기능 - 테스트 - MyComponent - src/App.jsx
* import 이름 from 식별자, DOM 경량화
```
import reactLogo from './assets/react.svg'

function Profile() {
  return (
    <>
      <img src={reactLogo} className="logo" alt="React logo" />
    </>
  )
}

export default function App() {

  return (
    <>
      <Profile />
    </>
  )
}
```


## 20260311 (2주차)
* 파워셀은 파일 경로만 나옴 cmd도 마찬가지
git bash는 리눅스처럼 가능함

* 공용에서는 디렉토리 생성 후 사용자 등록
개인 pc는 사용자 동륵후 디렉토리 생성
마지막에 git 저장소 생성

```
// 1. 변수 선언 및 할당 (데이터 저장)
let name = "JS";
const message = "Hello, World!";

// 2. 콘솔 출력
console.log(message); // 콘솔에 Hello, World! 출력

// 3. 함수 정의 및 호출
function sayHello(userName) {
    return `${userName}님, 환영합니다!`;
}
let result = sayHello(name);
alert(result); // 브라우저 알림창에 출력

// 4. 간단한 조건문
if (name === "JS") {
    console.log("JavaScript입니다.");
}
```

* defualt branch
git master
github git을 만들어 서비스를 하는거임 main
WorkDirectory → Change → Stage

* markdown grammer ``` *-+

* portable

* UI = f(state)
이벤트가 발생하면 DOM이 바뀌는 것이 아니라, state를 변경하면 재 rendering 하는 것이다
리액트에서 Rendering이란 현재 State를 기준으로 UI를 다시 계산하는 과정
DOM 조작이 아닌 UI 계산
즉 상태가 무엇인지만 정의하면 됨

* State와 Rendering의 관계를 명확하게 설명하고 사용 할 수 있어야 함

1. 왜 이 state가 여기 있어야 하는지 설명할 수 있어야 함
2. 왜 이 Component가 다시 Rendering 되는지 설명할 수 있어야 함
3. 왜 Effect가 필요한지 혹은 필요 없는지 설명할 수 있어야 함

## 20260304 (1주차)

* Next.js는 **리액트(React) 기반의 풀스택 웹 프레임워크**로, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원해 검색 엔진 최적화(SEO)와 빠른 성능을 제공
파일 기반 라우팅, 자동 코드 분할, 최적화된 이미지 및 폰트 기능을 기본 제공하여 복잡한 설정 없이 효율적인 웹 개발을 도움

* Git
시스템의 구성은 CVCS(Centralized Version Control System)와 같은 서버-클라이언트 시스템
클라이언트는 파일들의 마지막 스냅샷을 가져오는 대신 저장소 전체를 복제(clone)하여 사용
서버에 문제가 발생해도 클라이언트 중 하나의 저장소를 다시 서버로 복사하면 서버가 복구됨
DVCS(Distributed Version Control System)에는 git, MErucrial, Bazaar, Darcs 등 있음