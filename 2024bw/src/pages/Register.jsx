import React, {useState, useRef } from "react";
import styled from "styled-components";
import './Register.css'
import { Form, useNavigate } from "react-router-dom";

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, #5487FF 30%,#93b3ff 40%, #bed1ff 60%, #FFFFFF 100%);
    padding: 0;
    margin: 0;
    height: 100vh; /* Viewport 높이를 100%로 설정 */
`

const Register = () => {

    // const [value, setValue] = useState({
    //     memberEmail:'',
    //     memberPw:'',
    //     studNum:'',
    // });

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [studNum, setStudNum] = useState('');

    const navigate = useNavigate();

    const onSubmit = async() =>{
        // await axios.post('http://localhost:8080/sign-up',{
        //     memberEmail: email,
        //     memberPw: pw,
        //     studNum: studNum
        // })
        // .then(()=>{
        //     navigate("/");
        // })
        // .catch((error) => {
        //     console.log('An error occurred: ', error.response);
        // })
        navigate("/");
    };

    return (
        <React.Fragment>
            <Wrapper className="register-container-wrapper">
            <div className="logo">
                <span className="logotext">IB</span>
            </div>
            <div className="container">
                <div className="header">
                    <div className="text">회원가입</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text"
                        placeholder="학번"
                        onChange={(e) => {
                            setStudNum(e.target.value);
                        }} />
                    </div>
                    <div className="input">
                        <input
                            type="email"
                            pattern=".+@sookmyung.ac.kr"
                            placeholder="이메일"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}/>
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            maxLength={15}
                            placeholder="비밀번호"
                            onChange={(e) => {
                                setPw(e.target.value);
                            }}/>
                    </div>
                    <div className="input">
                        <input
                            maxLength={15}
                            type="text"
                            placeholder="비밀번호 확인" />
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={onSubmit}>회원가입</div>
                </div>
            </div>
            </Wrapper>
        </React.Fragment>

    );
}

export default Register;