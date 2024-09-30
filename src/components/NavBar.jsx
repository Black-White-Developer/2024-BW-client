import { useNavigate } from "react-router-dom";

import useUserStore from "../store/useUserStore";

import axiosInstance from "../util/axiosInstance";

import styled from "styled-components";
import Cookies from "js-cookie";

import avatar from "../image/profile-image.svg";

const Nav = styled.nav`
    height: 50px;
    color: black;
    font-weight: 600;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    z-index: 1;
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    label {
        cursor: pointer;
    }

    #home {
        padding-left: 20px;
        font-size: 30px;
        font-weight: 600;
        display: flex;
        align-items: center;

        #ib {
            font-family: "Roboto", sans-serif;
            font-weight: 900;
            font-style: italic;
            color: #3A70FF;
            padding-left: 5px;
            cursor: pointer;

            &:hover {
                color: #0046ff;
            }
        }
    }

    #text {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-left: auto;
        flex-grow: 1;

        #list {
            margin-right: 20px;

            &:hover {
                color: #636363;
            }
        }

        #login {
            margin-right: 20px;

            &:hover {
                color: #636363;
            }
        }

        #logout {
            margin-right: 20px;

            &:hover {
                color: #636363;
            }
        }
    }
`;

export default function NavBar() {
    let navigate = useNavigate();

    const { user } = useUserStore();

    const onLogout = () => {
        useUserStore.setState({ user: null });
        Cookies.remove("token");
        axiosInstance.defaults.headers["Authorization"] = null;
        navigate("/");
    }

    const handleLoginClick = () => {
        if (user) {
            // If already authenticated, go to My Page
            navigate("/Mypage");
        } else {
            // If not authenticated, go to Login page
            navigate("/login");
        }
    };

    return (
        <Nav>
            <div id="home">
                <label id="ib" onClick={() => { navigate("/") }}>IB</label>
            </div>
            <div id="text">
                <label id="list" onClick={() => { navigate("/list") }}>게시판</label>
                <label id="login" onClick={handleLoginClick}>
                    {user ? "마이페이지" : "로그인"}
                </label>
                {user && <label id="logout" onClick={onLogout}>로그아웃</label>}
                {user && (
                    <div className="flex items-center gap-2 mr-4">
                        <img src={user?.avatar || avatar} alt="profile" className="w-8 h-8 rounded-full bg-black"/>
                        <p>{user.nickname}</p>
                    </div>
                )}
            </div>
        </Nav>
    );
}
