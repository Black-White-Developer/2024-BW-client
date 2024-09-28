import styled from "styled-components"
// import sookmyung from '../assets/sookmyung.jpg'
// import COLOR from "../utils/color";

const Box = styled.div`
    width: 200px; /* 카드 너비 조정 */
    height: 200px; /* 카드 높이 조정 */
    background-color: #fff; /* 카드 배경색 */
    border-radius: 15px; /* 카드 둥글기 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%; /* 카드 내부 여백 */
    border: 1px solid gray;
    box-shadow: 3px 5px 10px gray;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }
    #text1{
        font-size: 15px;
        font-weight: 600;
        color: #000;
    }
    #title{
        font-size: 20px;
        font-weight: 600;
    }
    #text2{
        text-align: center;
        font-size: 13px;
    }
`;

export default function CardEvent(props){
    return(
        <Box>
            {/* <img src={sookmyung}/> */}
            <text id="title">제목{props.title}</text>
            <text id="text2">작성자{props.author}</text>
        </Box>
    )
}