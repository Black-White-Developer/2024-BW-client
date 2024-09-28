import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    height: 45px;
    color: black;
    font-weight: 600;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0; /* 화면 왼쪽에 붙이기 */
    background-color: white;
    display: flex;
    flex-direction: row;
    z-index: 1;
    box-sizing: border-box; /* 패딩과 보더가 포함된 너비 계산 */

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
        flex-grow: 1; /* 남은 공간 모두 채우기 */

        #list {
            margin-right: 20px; /* label 사이 간격 */
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
    }
`;

export default function NavBar() {
    let navigate = useNavigate();

    return (
        <Nav>
            <div id="home">
                <label id="ib" onClick={() => { navigate("/home") }}>IB</label>
            </div>
            <div id="text">
                <label id="list" onClick={() => { navigate("/board/group") }}>게시판</label>
                <label id="login" onClick={() => { navigate("/login") }}>로그인</label>
            </div>
        </Nav>
    )
}
