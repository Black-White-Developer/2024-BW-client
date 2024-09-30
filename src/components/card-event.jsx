import styled from "styled-components"
import {useNavigate} from "react-router-dom";

const Box = styled.div`
    background-color: #fff; /* 카드 배경색 */
    border-radius: 15px; /* 카드 둥글기 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%; /* 카드 내부 여백 */
   border: 1px solid #ccc;
    box-shadow: 3px 5px 10px gray;
    cursor: pointer;
    &:hover{
        transform: scale(1.01);
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
    const navigate = useNavigate();

    return(
        <Box onClick={() => {
            navigate(`/Detail/${props.id}`)
        }}>
            <text id="title">{props.title}</text>
            <text id="text2">{props.author}</text>
        </Box>
    )
}