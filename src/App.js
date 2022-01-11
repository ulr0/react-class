/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['코트 추천', '강남 맛집', 100]);
  let a = { color : 'pink', fontSize : '30px' }
  let [like, setLike] = useState(0);

  function changeTitle(){
    var newArray = [...title]; // 기존 state deep copy
    newArray[0] = '여자 코트 추천'; // copy한 데이터에 수정사항 반영
    setTitle( newArray ); // 변경함수()에 집어넣기
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
{/* 
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

      <Modal />
      
    </div>
  );
}

// Component 만드는 법, 위치는 function App 이랑 나란히
function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
