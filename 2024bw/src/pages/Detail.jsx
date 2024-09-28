import React from "react";
import "./Detail.css";
//import ProfileImage from "./src/image/profile-image.svg";
export default function Detail() {
  return (
    <>
      <React.Fragment>
        <div>
          <div className="profileimage" /*src={ProfileImage}*/ />
          <div className="profileinfo" />
          <div className="title" />
        </div>
        <div>
          <div className="note" />
        </div>
        <div>
          <button className="apply" />
          <button className="back" />
        </div>
        <div>
          <div className="comment-title" />
          <div className="" />
        </div>
      </React.Fragment>
    </>
  );
}
