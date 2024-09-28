import React from "react";
import "./Write.css";
import NavBar from "../components/navBar";

export default function Write() {
  return (
    <>
      <div className="title">
        <div
          className="titletext"
          input
          type="text"
          placeholder="제목을 입력하세요"
        ></div>
      </div>
      <div className="note">
        <div
          className="notetext"
          input
          type="text"
          placeholder="아이디어를 입력하세요"
        ></div>
      </div>
    </>
  );
}
