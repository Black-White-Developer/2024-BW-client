import React, { useState } from "react";
import styled from "styled-components";
import "./Detail.css";
import ProfileImageSrc from "../image/profile-image.svg";
import { useNavigate } from "react-router-dom";

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
export default function Detail() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  // const [accountName, setAccountName] = useState("");
  // const [accountLevel, setAccountLevel] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value); // 입력 필드의 값을 상태로 업데이트
  };

  // 댓글 제출 핸들러 (제출 버튼 클릭 시 호출)
  const handleCommentSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되지 않도록 함
    if (comment.trim() !== "") {
      // 빈 댓글은 추가하지 않음
      setComments([...comments, comment]); // 기존 댓글 목록에 새로운 댓글 추가
      setComment(""); // 입력 필드 초기화
    }
  };

  // Enter 키로 댓글을 제출하는 핸들러
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 엔터로 줄바꿈이 아닌 댓글 제출을 처리
      handleCommentSubmit(e);
    }
  };

  return (
    <>
      <Banner>
        <text>IB뱅크</text>
      </Banner>
      <br />
      <div>
        <div className="topcontainer">
          <div className="profileimage" src={ProfileImageSrc} />
          <div className="profileinfo">
            <div className="profilename">붕어빵</div>
            <br />
            <div className="profilelevel">Lv.3</div>
          </div>
          <div className="title">
            개발자들에게 아이디어를 제공하는 서비스를 제안합니다
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="note">
          저는 이런이런 서비스를 기획중인데 같이 해보실 개발자가 있으신가요?
        </div>
      </div>
      <div className="menu">
        <button className="heart">❤️</button>
        <button className="back" onClick={goBack}>
          뒤로가기
        </button>
        <button className="apply">매칭 신청</button>
      </div>
      <div>
        <div className="comment-title" />
        <div className="" />
      </div>
      <br />
      <div className="comment">댓글({comments.length})</div>

      <div>
        {comments.map((cmt, index) => (
          <div key={index} className="commentbox">
            {cmt}
          </div>
        ))}
      </div>
      <div onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onKeyPress={handleKeyPress} // 엔터 키로 제출
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요"
          rows="4"
          cols="50"
        ></textarea>
      </div>
    </>
  );
}
