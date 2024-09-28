import React, { useState } from "react";
import styled from "styled-components";
import "./Write.css";
import NavBar from "../components/navBar";
import Logo from "../components/logoBar";

const Wrapper = styled.div`
  background-color: white;
  width: 100vw; // 부모는 뷰포트 길이로 계산됨
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 90px;
`;

const Write = () => {
  const [title, setTitle] = useState(""); // 제목 상태
  const [note, setNote] = useState(""); // 노트 상태

  // 게시글 등록 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    console.log("제목:", title);
    console.log("노트 내용:", note);
  };
  return (
    <>
      <Wrapper>
        <NavBar />
        <Logo />
        <div className="writeall">
          <div className="title">
            <input
              className="titletext"
              input
              type="text"
              placeholder="제목을 입력하세요"
              value={title} // 상태 연결
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div className="note">
            <textarea
              className="notetext"
              input
              type="text"
              placeholder="아이디어를 입력하세요"
              value={note} // 상태 연결
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <button className="regi" type="submit" onClick={handleSubmit}>
            등록
          </button>
        </div>
      </Wrapper>
    </>
  );
};
export default Write;
