import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState('코트 추천');
  let [title2, titleChange2] = useState('강남 맛집');
  let [title3, titleChange3] = useState(100);
  let a = { color : 'pink', fontSize : '30px' }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ a }> 개발 Blog </div>
      </div>
      <div className="list">
        <h4> { title } </h4>
        <p>1월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { title2 } </h4>
        <p>1월 9일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { title3 } </h4>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
