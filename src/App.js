import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState('코트 추천');
  let posts = '강남 맛집'
  function a(){
    return 100
  }
  let b = { color : 'pink', fontSize : '30px' }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ b }> 개발 Blog </div>
      </div>
      <div className="list">
        <h4> { posts } </h4>
        <p>1월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { a() } </h4>
        <p>1월 9일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { title } </h4>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
