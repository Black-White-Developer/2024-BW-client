import React from "react";
import styled from "styled-components";
import './Main.css';
import { motion } from "framer-motion";
import NavBar from "../components/navBar";

const Wrapper = styled.div`
    background-color: #93b3ff;
    width: 100vw; // 부모는 뷰포트 길이로 계산됨
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Banner = styled.div`
    // margin-top: 45px; /* NavBar의 높이만큼 margin 추가 */
    background: linear-gradient(to bottom, #ffffff, #93b3ff); /* 그라데이션 적용 */
    color: #3A70FF;
    width: 100%;
    height: 50vh; /* 높이를 줄임 */
    display: flex;
    flex-direction: row;
    justify-content: center; /* 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    
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
            font-size: 120px;
            font-weight: 600;
        }
    }

    #box2 {
        width: 50%; /* 가운데로 배치되도록 너비 조정 */
        font-size: 40px;
        font-weight: 600;
        color: #000; /* 글자 색을 검은색으로 변경 */
        display: flex;
        flex-direction: column;
        align-items: center; /* 가운데 정렬 */
        justify-content: center;
        margin: 0; /* 불필요한 마진 제거 */
        
        #txt {
            font-size: 35px; /* 하위 텍스트 크기 조정 */
            padding-left: 0;
        }
    }

    #box3 {
        font-weight: 600;
        width: 160%;
        font-size: 25px;
    }
`;

const Main = () => {
    return (
        <Wrapper>
            <NavBar />
            <Banner>
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
                    <text>개발자 여러분들의 아이디어를</text>           
                    <text id="txt">도와드립니다.</text> 
                </motion.div>
            </Banner>
        </Wrapper>
    );
}

export default Main;
