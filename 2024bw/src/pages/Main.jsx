import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion"
import './Main.css'
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 99vw; //부모는 뷰포트 길이로 계산됨
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Banner = styled.div`
    margin-top: 45px;
    background-color: #000;
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    div{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .box1{
        width: 35%;
        align-items: center;
        padding-left: 10%;
        img{
            margin-top: 35%;
        }
        text{
            font-size: 120px;
            font-weight: 600;
        }
    }
    #box2{
        width: 160%;
        font-size: 45px;
        font-weight: 600;
        margin: 50% 20% 5% -10%;
        #txt{
            padding-left: 60%;
        }

    }
    #box3{
        font-weight: 600;
        width: 160%;
        font-size: 25px;
    }
    
`;
// const { scrollYProgress } = useViewportScroll()
// const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

const Main = () => {
    return (
        <Wrapper>
            <NavBar/>
            <Banner>
            <motion.div
                    // style={{ scale }}
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once:false}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1
                    }}
                    className="box1">
                    <text>IB</text>
                </motion.div>
            </Banner>
        </Wrapper>
    )
}

export default Main;