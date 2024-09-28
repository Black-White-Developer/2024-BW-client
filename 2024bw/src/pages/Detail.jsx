import React, { useState } from "react";
import styled from "styled-components";
import "./Detail.css";
import ProfileImageSrc from "../image/profile-image.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default function Detail() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const fixedNickname = "하이"; // 고정된 닉네임
  const [isHeartActive, setIsHeartActive] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value); // 댓글 입력 값 업데이트
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    if (comment.trim() !== "") {
      setComments([...comments, { nickname: fixedNickname, text: comment }]); // 댓글과 고정 닉네임 저장
      setComment(""); // 댓글 입력창 초기화
    }
  };
  const handleHeartClick = () => {
    setIsHeartActive((prev) => !prev); // 하트 상태 토글
  };
  return (
    <Wrapper>
      <Banner>
        <text>IB</text>
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
        <button
            className={`heart ${isHeartActive ? "active" : ""}`}
            onClick={handleHeartClick}
            isActive={isHeartActive}
            id="detail_button"
          >
          ❤️
          </button>
        <button className="back" onClick={goBack} id="detail_button">
          뒤로가기
        </button>
        <button className="apply" id="detail_button">매칭 신청</button>
      </div>
      <div className="comment-section">
        <div className="comment">댓글({comments.length})</div>

        {/* 댓글 목록 */}
        {comments.map((cmt, index) => (
          <div key={index} className="commentbox">
            <div className="comment-nickname">{cmt.nickname}</div>
            <div className="comment-text">{cmt.text}</div>
          </div>
        ))}

        {/* 댓글 입력 폼 */}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력하세요"
            rows="4"
            cols="50"
            className="comment-input"
            required
          ></textarea>
          <button type="submit" className="submit-comment" id="detail_button">
            댓글 달기
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
