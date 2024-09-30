import React, {useEffect, useState} from "react";
import styled from "styled-components";
import "./Detail.css";
import {useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import NavBar from "../components/NavBar";
import avatar from '../image/profile-image.svg';
import {toast} from "react-toastify";
import useUserStore from "../store/useUserStore";
import {FaHeart} from "react-icons/fa";
const Wrapper = styled.div`
    width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;
export default function Detail() {
    useNavigate();
    const { user } = useUserStore();

    const { id } = useParams();
    const [board, setBoard] = useState({});

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [isMatchDisabled, setIsMatchDisabled] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await axiosInstance.get(`/board/${id}`);

            if (response?.data?.content?.board) {
                setBoard(response.data.content.board);
                console.log(response.data.content.board.like.length);
            }
        })();

        (async () => {
            if(!user)return;
            const response = await axiosInstance.get(`/board/like/${id}`);

            if (response?.data?.content?.isLike) {
                setIsHeartActive(response.data.content.isLike);
            }
        })();

        (async () => {
            if(!user)return;
            const response = await axiosInstance.get(`/board/match/${id}`);

            if (response?.data?.content?.isMatch) {
                setIsMatchDisabled(response.data.content.isMatch);
            }
        })();

        (async () => {
            if(!user)return;
            const response = await axiosInstance.get(`/comment/board/${id}`);

            if (response?.data?.content?.comments) {
                setComments(response.data.content.comments);
            }
        })();
    }, [user]);

    const handleCommentChange = (e) => {
        setComment(e.target.value); // 댓글 입력 값 업데이트
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지
        if (comment.trim() !== "") {
            setComments([...comments]); // 댓글과 고정 닉네임 저장
            setComment(""); // 댓글 입력창 초기화
        }
    };

    const handleHeartClick = () => {
        setIsHeartActive((prev) => !prev);



        (async () => {
            if (isHeartActive) {
               await axiosInstance.delete(`/board/like/${id}`);
            } else {
                await axiosInstance.put(`/board/like/${id}`);
            }

            const response = await axiosInstance.get(`/board/${id}`);

            if (response?.data?.content?.board) {
                setBoard(response.data.content.board);
                console.log(response.data.content.board.like.length);
            }
        })();
    };

    const onMatchClick = async () => {
        const response = await axiosInstance.post(`/board/match/${id}`);

        if (response) {
            setIsMatchDisabled(true);
            toast.success("매칭 신청이 완료되었습니다.");
        }
    }

    return (
        <>
            <NavBar/>
            <Wrapper>
                <div>
                    <div className="topcontainer">
                        <div className="title">
                            {board.title}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-cente">
                        <img className="profileimage" src={board.author?.avatar || avatar} alt="icon"/>
                        <div className="profileinfo">
                            <div className="profilename">{board?.author?.nickname || ''} <p>(Lv.3)</p></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <div className="note">
                        {board.content}
                    </div>
                </div>
                <div className="w-[80vw] mt-4 flex align-center justify-between">
                    <button className={`px-4 py-2 rounded ${
                        isMatchDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`} onClick={onMatchClick} disabled={isMatchDisabled}>매칭 신청</button>
                    <div className="flex items-center gap-2">
                        <FaHeart
                            className={`text-xl cursor-pointer ${isHeartActive ? "text-red-500" : ""}`}
                            onClick={handleHeartClick}
                        />
                        <span>{board?.like?.length}</span>
                    </div>
                </div>
                <div className="comment-section">
                    <div className="comment">댓글({comments.length})</div>

                    {/* 댓글 목록 */}
                    {comments.map((cmt, index) => (
                        <div key={index} className="commentbox">
                            <div className="flex items-center gap-2">
                                <img src={cmt.author?.avatar || avatar} alt="profile"
                                     className="w-8 h-8 rounded-full"/>
                                <div className="comment-nickname">{cmt.author.nickname}</div>
                            </div>
                            <div className="comment-text">{cmt.content}</div>
                        </div>
                    ))}

                    {/* 댓글 입력 폼 */}
                    <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="댓글을 입력하세요"
              rows="5"
              cols="50"
              className="comment-input"
              required
          ></textarea>
                        <button type="submit" className="submit-comment" id="detail_button" onClick={async () => {
                            await axiosInstance.post(`/comment/board/${id}`, {
                                content: comment,
                            });

                            axiosInstance.get(`/comment/board/${id}`).then((response) => {
                                if (response?.data?.content?.comments) {
                                    setComments(response.data.content.comments);
                                }
                            });

                            setComment("");

                            toast.success("댓글이 등록되었습니다.");
                        }}>
                            댓글 달기
                        </button>
                    </form>
                </div>
            </Wrapper></>
    );
}
