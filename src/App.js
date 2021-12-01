/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','강남 술집','강남 노래방']);
  
  return (
    <div className="App">
     <div className="black-nav">
        <div>개발 Blog</div>
     </div>
     
     <div classname ="list">
      <h3>{글제목[0]}</h3>
      <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div classname ="list">
      <h3>{글제목[1]}</h3>
      <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div classname ="list">
      <h3>{글제목[2]}</h3>
      <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div classname ="list">
      <h3>{글제목[3]}</h3>
      <p>2월 17일 발행</p>
       <hr/>
     </div>

    </div>
  );
}

export default App;
