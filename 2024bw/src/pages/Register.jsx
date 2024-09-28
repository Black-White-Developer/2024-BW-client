import React, { useState } from "react";
import styled from "styled-components";
import './Register.css';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, #5487FF 30%,#93b3ff 40%, #bed1ff 60%, #FFFFFF 100%);
    padding: 0;
    margin: 0;
    height: 100vh; /* Viewport 높이를 100%로 설정 */
`;

const Register = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [nickname, setNickname] = useState('');
    const [level, setLevel] = useState('');
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateInputs = () => {
        let validationErrors = {};
        
        // Check if email is valid
        if (!emailRegex.test(email)) {
            validationErrors.email = "유효한 이메일 형식을 입력하세요.";
        }
        
        // Check if password and confirm password match
        if (pw !== confirmPw) {
            validationErrors.confirmPw = "비밀번호가 일치하지 않습니다.";
        }

        // Check if all fields are filled
        if (!email) validationErrors.email = "이메일을 입력하세요.";
        if (!pw) validationErrors.pw = "비밀번호를 입력하세요.";
        if (!confirmPw) validationErrors.confirmPw = "비밀번호 확인을 입력하세요.";
        if (!nickname) validationErrors.nickname = "닉네임을 입력하세요.";
        if (!level || ![1, 2, 3].includes(parseInt(level))) {
            validationErrors.level = "레벨을 1, 2, 3 중 하나로 입력하세요.";
        }

        return validationErrors;
    };

    const goToMain = () => {
        navigate('/');
    }

    const onSubmit = async () => {
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // If no errors, proceed with navigation
        navigate("/");
    };

    return (
        <React.Fragment>
            <Wrapper className="register-container-wrapper">
                <div className="logo">
                    <span className="logotext" onClick={goToMain}>IB</span>
                </div>
                <div className="container">
                    <div className="reg_header">
                        <div className="text">회원가입</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="text"
                                placeholder="닉네임"
                                onChange={(e) => setNickname(e.target.value)}
                                required
                            />
                            {errors.nickname && <span className="error">{errors.nickname}</span>}
                        </div>
                        <div className="input">
                            <input
                                type="email"
                                placeholder="이메일"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                maxLength={15}
                                placeholder="비밀번호"
                                onChange={(e) => setPw(e.target.value)}
                                required
                            />
                            {errors.pw && <span className="error">{errors.pw}</span>}
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                maxLength={15}
                                placeholder="비밀번호 확인"
                                onChange={(e) => setConfirmPw(e.target.value)}
                                required
                            />
                            {errors.confirmPw && <span className="error">{errors.confirmPw}</span>}
                        </div>
                        <div className="input">
                            <input
                                type="number"
                                min="1"
                                max="3"
                                placeholder="레벨 (1, 2, 3)"
                                onChange={(e) => setLevel(e.target.value)}
                                required
                            />
                            {errors.level && <span className="error">{errors.level}</span>}
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
