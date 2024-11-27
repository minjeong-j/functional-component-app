// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// 1단계 기본 함수형 컴포넌트
/*
function App() {
	return (
    	<div>
        	<Greeting />
        </div>
    );
}
*/

// 2단계 Props 사용
/*
function App() {
  return <Greeting name="React!" />;
}
*/

// 3단계 React Hook 사용 - useState
function App() {
  return (
    <div>
      <Greeting name="React!" />
      <Counter />
    </div>
  );
}

export default App;