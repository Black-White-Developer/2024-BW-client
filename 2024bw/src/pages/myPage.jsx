import React from 'react';
import './myPage.css';

const MyComponent = () => {
  return (
    <div>
      <div className="header">
        <span className="header-text">(닉네임)님의 페이지</span>
      </div>
      <div className="circle"></div>
      <div className="name">
        <span className="name-text">이름</span>
      </div>
      <div className="level">
        <span className="level-text">레벨</span>
      </div>
      <div className="age">
        <span className="age-text">나이</span>
      </div>
      <div className="email">
        <span className="email-text">이메일</span>
      </div>
      <div className="myWriting">
        <span className="myWriting-text">내가 쓴 글</span>
      </div>
    </div>
  );
};

export default MyComponent;