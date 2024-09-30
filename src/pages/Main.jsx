import React, {useEffect} from "react";
import styled from "styled-components";
import "./Main.css";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import CardEvent from "../components/card-event";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import { TypeAnimation } from 'react-type-animation';

const Wrapper = styled.div`
  background: #e3ecff; /* 배경색 설정 */
  width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 상단 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
`;

const Banner = styled.div`
    margin-top: 45px; /* NavBar와 붙이기 위해 마진 제거 */
    background: linear-gradient(
            to bottom,
            #ffffff 40%,
            #e3ecff
    ); /* 그라데이션 적용 */
    color: #3a70ff;
    width: 100%;
    height: 40vh; /* 높이를 줄임 */
    display: flex;
    flex-direction: row;
    justify-content: center; /* 가운데 정렬 */
    align-items: flex-start; /* 수직 가운데 정렬 */

    div {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .box1 {
        width: 35%;
        align-items: center;
        padding-left: 10%;

        img {
            margin-top: 35%;
        }

        text {
            font-size: 100px;
            font-weight: 600;
        }
    }

    #box2 {
        width: 50%; /* 가운데로 배치되도록 너비 조정 */
        font-size: 30px;
        font-weight: 600;
        color: #000; /* 글자 색을 검은색으로 변경 */
        display: flex;
        flex-direction: column;
        align-items: center; /* 가운데 정렬 */
        justify-content: center;
        /* 불필요한 마진 제거 */
        margin: 0;
    }

    .banner_text {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        margin-top: 100px;
    }
    
    .banner_text text {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: italic;
    }
`;

const Event = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
    margin-bottom: 20px;
  #best {
    margin-bottom: 3%;
    font-size: 25px;
    font-weight: 700;
  }
  div {
    width: 80%;
    height: 100px;
    display: flex;
    gap: 5%;
    margin-top: 10px;
    margin-left: auto; /* div를 가운데에 둠 */
    margin-right: auto; /* div를 가운데에 둠 */
  }
`;

const WriteBtn = styled.button`
  flex: none !important;
  background-color: #5487FF; /* 파란색 계열 */
  color: #fff; /* 텍스트 색상 흰색 */
  border: none; /* 테두리 없음 */
  border-radius: 16px; /* 둥근 모서리 */
  padding: 8px 24px; /* 패딩 */
  font-size: 16px; /* 폰트 크기 */
  cursor: pointer; /* 커서가 포인터로 변경 */
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */
  margin-left: auto; /* 버튼을 오른쪽으로 이동 */
  margin-right: 5%;

  &:hover {
    background-color: #2a55cc; /* 호버 시 색상 변화 */
  }
`;

const Main = () => {
  const navigate = useNavigate();

  const [best, setBest] = React.useState([]);


  const goToWrite = () => {
    navigate("/Write"); // 게시글 등록 페이지로 이동
  };

  const boxVariants = {
    ini: { opacity: 0, y: 50 },
    inView: { opacity: 1, y: 0 },
    port: { once: false },
  };

  useEffect(() => {
      (async () => {
          const response = await axiosInstance.get('/board/best');

          if (response?.data?.content?.boards) {
              setBest(response.data.content.boards);
          }
      })();
  }, [])

  return (
    <Wrapper>
      <NavBar />
      <Banner>
        <div className="banner_text">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="box1"
          >
            <text>IB</text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            id="box2"
          >
              <TypeAnimation
                  style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', marginTop: '14px'}}
                  sequence={[
                      `개발자 여러분들의\n아이디어를 도와드립니다!`,
                  ]}
                  speed={250}
                  repeat={0}
              />
          </motion.div>
        </div>
      </Banner>
      <WriteBtn onClick={goToWrite}>게시글 등록</WriteBtn>{" "}
      {/* 버튼 텍스트 추가 */}
      <Event>
        <motion.text
          variants={boxVariants}
          initial="ini"
          whileInView="inView"
          viewport="port"
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          id="best"
        >
            🔥 Best Board 🔥
        </motion.text>
        <motion.div
          variants={boxVariants}
          initial="ini"
          whileInView="inView"
          viewport="port"
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="flex flex-col items-center gap-y-10"
        >
          {best.map((board) => (
              <CardEvent key={board.id} id={board.id} title={board.title} author={board.author.nickname} />
          ))}
        </motion.div>
      </Event>
    </Wrapper>
  );
};

export default Main;
