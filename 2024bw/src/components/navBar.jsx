import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserStore from "../store/useUserStore";
import Cookies from "js-cookie";
import axiosInstance from "../util/axiosInstance"; // Import the useAuth hook

const Nav = styled.nav`
    height: 45px;
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
    padding-top: 1%;
    label {
        cursor: pointer;
    }

    #home {
        padding-left: 20px;
        font-size: 30px;
        font-weight: 600;

        #ib {
            color: #3A70FF;
            padding-left: 5px;
            cursor: pointer;

            &:hover {
                color: #6c8668;
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
            </div>
        </Nav>
    );
}
