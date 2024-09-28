import React, { useEffect, useState } from "react";
import style from 'styled-components';
import './Login.css'
// import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, #5487FF 30%,#93b3ff 40%, #bed1ff 60%, #FFFFFF 100%);
    padding: 0;
    margin: 0;
    height: 100vh; /* Viewport 높이를 100%로 설정 */
`
const Login = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();

    //     console.log(inputEmail);
    //     console.log(inputPw);

    //     let body = {
    //         memberEmail : inputEmail,
    //         memberPw : inputPw,
    //     }

    //     dispatch()
    // }

    // const onClickLogin = async (data) => {
    //     return await axios.post("http://localhost:8080/log-in", {
    //         memberEmail: inputEmail,
    //         memberPw: inputPw,
    //     })
    //     .then((res) => {
    //         console.log(res);
    //         localStorage.setItem('accessToken', res.data.data.accessToken);
    //         navigate("/home");
    //     }).catch((error)=>{
    //         console.log("inputEmail: " + inputEmail)
    //         console.log("inputPw: " + inputPw)
    //         console.log(error)
    //     })

    //     // e.preventDefault();
    //     // console.log('Id', inputEmail);
    //     // console.log('Pw', inputPw);

    //     // let body = {
    //     //     id: inputEmail,
    //     //     pw: inputPw,
    //     // }

    //     // dispatchEvent(loginUser(body));
    // }

    const goToRegister = () => {
        navigate("/Register")
    }

    useEffect(() => {
        // axios.get('')
    },
        [])
    return (

        <React.Fragment>
            <Wrapper>
            <div className="login_logo">
                <span className="login_logotext">IB</span>
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
                    <button className="login_submit" onClick={goToRegister}>로그인</button>
                    <button className="register" onClick={goToRegister}>회원가입</button>
                </div>

            </div>
            </Wrapper>
        </React.Fragment>
    );
}

export default Login;