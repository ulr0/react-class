/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['코트 추천', '강남 맛집', 100]);
  let a = { color : 'pink', fontSize : '30px' }
  
  let [like, setLike] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false); // modal 상태 저장하는 state

  let [titleNumber, setTitleNumber] = useState(0);
  
  // 사용자가 input에 입력한 값 저장하는 state
  let [input, setInput] = useState('');

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
          <div className="list" key={index}>
            <h4 onClick={ ()=>{ 
              setTitleNumber(index);
            setModal(!modal);
          } }> { a } <span onClick={ ()=>{ 
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

      {/* 글 발행 기능 만들기
          사용자가 입력한 input 값을 state에 저장해놓고
          저장 버튼 누르면 글제목 state값에 추가되게 */}
      <div className="publish">
        <input onChange={ (e)=> { setInput(e.target.value) } } />
        <button onClick={ ()=>{
          var newTitle = [...title];
          newTitle.unshift(input);
          setTitle(newTitle);
        }}>저장</button>
      </div>

      {/* 사용자가 입력한 값으로 input state 변경하는 이벤트
      <input onChange={ (e)=>{ setInput(e.target.value) } } /> */}

      {/* <button onClick={ ()=>{ setTitleNumber(0) } }>button1</button>
      <button onClick={ ()=>{ setTitleNumber(1) } }>button2</button>
      <button onClick={ ()=>{ setTitleNumber(2) } }>button3</button> */}

      {/* <button onClick={ ()=> { setModal(!modal) } }>열고닫기</button> */}
      
      {
        modal === true
        /* state 전송 1. 자식 component 작명={ state명 } */
        ? <Modal title={ title } titleNumber={ titleNumber } ></Modal>
        : null
      }

      {/* 함수로 만든 반복문 사용*/}
      {/* { 반복된UI() } */}

    </div>
  );
}

// Component 만드는 법, 위치는 function App 이랑 나란히
/* state 전송 2. 자식 component에서 props 파라미터 입력 후 사용 */
function Modal(props){
  return(
    <div className="modal">
      <h2> { props.title[props.titleNumber] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 예전 React 문법 - Component 만들기
class Profile extends  React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName = () => {
    this.setState( {name : 'Lee'} )
  }

  render(){
    return (
      <div>
        <h3>프로필</h3>
        <p>저는 { this.state.name }입니다.</p>
        <button onClick={ ()=>{ this.setState( {name : 'Park'} ) } }>버튼</button>
        <button onClick={ this.changeName }>버튼2</button>
      </div>
    )
  }
}

export default App;
