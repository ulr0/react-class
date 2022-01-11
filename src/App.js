/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['코트 추천', '강남 맛집', 100]);
  let a = { color : 'pink', fontSize : '30px' }
  
  let [like, setLike] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false); // modal 상태 저장하는 state

  // map() 함수
  var array = [2,3,4];
  var newArray = array.map(function(a){
    return a * 2
  });

  // 함수 만들어서 for문 이용
  function 반복된UI(){
    var array = [];
    for (var i = 0; i< 3; i++){
      array.push(<div>안녕</div>); // array에 div 밀어넣기
    }
    return array // 리턴으로 array 반환
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ a }> 개발 Blog </div>
      </div>
      {/* map() 함수로 HTML 반복*/}
      {
        title.map(function(a, index){
          return (
          <div className="list">
            <h4> { a } <span onClick={ ()=>{ 
              var newLike = [...like];
              newLike[index] += 1;
              setLike( newLike );
            } }>❤️</span> { like[index] } </h4>
            <p>1월 11일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      {/* 함수로 만든 반복문 사용*/}
      { 반복된UI() }

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
