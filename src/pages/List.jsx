import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axiosInstance from "../util/axiosInstance";

const Wrapper = styled.div`
    width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 세로 가운데 정렬 */
    margin-top: 60px;
`;

const Banner = styled.div`
    margin-top: 1%;
    width: 95vw;
    height: 10vh; 
    padding: 1%;
    background: #BCD0FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    text {
        font-size: 50px;
        font-weight: 600;
        &:hover {
            cursor: pointer;
            color: #636363;
        }
    }
`;

const Title = styled.div`
    margin-top: 5%;
    width: 95vw;
    height: 1%;
    padding: 1%;;
    display: flex;
    justify-content: center; /* Title 내부 텍스트 중앙 정렬 */
    align-items: center; /* Title 내부 텍스트 세로 중앙 정렬 */
    border-radius: 15px;
    font-size: 28px;
    font-weight: 600;
`;

const ListContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center; /* 리스트 중앙 정렬 */
    margin-top: 2%;
    gap: 10px;
`;

const ListItem = styled.div`
    width: 100%;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #ccc;
    margin: 5px 0;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center; /* 리스트 아이템 중앙 정렬 */
    font-size: 20px;
    cursor: pointer;
    flex-direction: column;
    
`;

const Pagination = styled.div`
    margin-top: 3%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const PageButton = styled.button`
    padding: 10px 15px;
    background: #3A70FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #2A55CC; /* 호버 시 색상 변화 */
    }

    &:disabled {
        background: #B0B0B0; /* 비활성 상태 색상 */
        cursor: not-allowed; /* 커서 모양 변경 */
    }
`;

const List = () => {
    const [board, setBoard] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // 페이지당 아이템 수

    const totalPages = Math.ceil(board.length / itemsPerPage);

    const currentItems = board.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        (async () => {
            const response = await axiosInstance.get('/board');

            if (response?.data?.content?.boards) {
                setBoard(response.data.content.boards.reverse());
            }
        })();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <NavBar/>
            <Wrapper>
                <Title>게시물 목록</Title>
                <ListContainer>
                    {currentItems.map((item, index) => (
                        <ListItem key={index} onClick={() => navigate(`/Detail/${item.id}`)}><p>{item.title}</p><p className="text-base">{item.author.nickname}</p></ListItem>
                    ))}
                </ListContainer>
                <Pagination>
                    <PageButton
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        이전
                    </PageButton>
                    <span>{currentPage} / {totalPages}</span>
                    <PageButton
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        다음
                    </PageButton>
                </Pagination>
            </Wrapper>
        </>
    );
};

export default List;
