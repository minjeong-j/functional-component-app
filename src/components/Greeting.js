// src/components/Greeting.js

// 1단계 기본 함수형 컴포넌트
/*
function Greeting() {
	return <h1>Hello, React!</h1>;
}
*/

// 2단계 Props 사용
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}


export default Greeting;