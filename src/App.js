/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['코트 추천', '강남 맛집', 100]);
  let a = { color : 'pink', fontSize : '30px' }
  let [like, setLike] = useState(0);

  function changeTitle(){
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ a }> 개발 Blog </div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      <div className="list">
        <h4> { title[0] } <span onClick={ ()=>{ setLike(like + 1) } }>❤️</span> { like } </h4>
        <p>1월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { title[2] } </h4>
        <p>1월 9일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { title[1] } </h4>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
