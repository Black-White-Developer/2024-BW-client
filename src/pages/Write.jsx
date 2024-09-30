import React, { useState } from "react";
import styled from "styled-components";
import "./Write.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import {toast} from "react-toastify";

const Wrapper = styled.div`
  background-color: white;
  width: 100vw; // 부모는 뷰포트 길이로 계산됨
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

const Banner = styled.div`
  margin-top: 1%;
  width: 95vw;
  height: 10vh;
  padding: 1%;
  background: #bcd0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  text {
    font-size: 50px;
    font-weight: 600;
  }
`;

const Write = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); // 제목 상태
  const [note, setNote] = useState(""); // 노트 상태

  // 게시글 등록 함수
  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await axiosInstance.post('/board/create', {
      title: title,
      content: note
    });

    if (response) {
      toast.success("게시글이 등록되었습니다.");
      navigate("/List");
    }
  };

  return (
      <>
        <Wrapper>
          <NavBar />
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
