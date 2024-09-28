import React, { useState } from "react";
import './Login.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../assets/AuthContext'; // Import the useAuth hook

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, #5487FF 30%, #93b3ff 40%, #bed1ff 60%, #FFFFFF 100%);
    padding: 0;
    margin: 0;
    height: 100vh;
`;

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Get the login function from AuthContext

    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const goToMain = () => {
        login(); // Call the login function from context
        navigate('/'); // Navigate to the main page
    };

    const goToRegister = () => {
        navigate("/Register");
    };

    return (
        <React.Fragment>
            <Wrapper className="login_container-wrapper">
                <div className="login_logo">
                    <span className="login_logotext" onClick={goToMain}>IB</span>
                </div>
                <div className="login_container">
                    <div className="login_header">
                        <div className="login_btn">로그인</div>
                        <div className="login_underline"></div>
                    </div>
                    <div className="login_inputs">
                        <div className="login_input">
                            <input type="text" placeholder="ID" value={inputEmail} onChange={handleInputEmail} />
                        </div>
                        <div className="login_input">
                            <input type="password" placeholder="PW" value={inputPw} onChange={handleInputPw} />
                        </div>
                    </div>
                    <div className="login_submit-container">
                        <button className="login_submit" onClick={goToMain}>로그인</button>
                        <button className="register" onClick={goToRegister}>회원가입</button>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default Login;
