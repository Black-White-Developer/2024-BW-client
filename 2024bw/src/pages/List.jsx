import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw; /* 부모는 뷰포트 길이로 계산됨 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 세로 가운데 정렬 */
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
    margin-top: 0.5%;
    width: 95vw;
    height: 1%;
    padding: 1%;
    background: #E4ECFF;
    display: flex;
    justify-content: center; /* Title 내부 텍스트 중앙 정렬 */
    align-items: center; /* Title 내부 텍스트 세로 중앙 정렬 */
    border-radius: 15px;
    // font-size: 24px;
    // font-weight: 600;
`;

const ListContainer = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center; /* 리스트 중앙 정렬 */
    margin-top: 2%;
`;

const ListItem = styled.div`
    width: 100%;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #335094;
    margin: 5px 0;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center; /* 리스트 아이템 중앙 정렬 */
    font-size: 20px;
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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // 페이지당 아이템 수
    const items = Array.from({ length: 20 }, (_, i) => `게시물 제목 ${i + 1}`); // 20개의 게시물 제목 생성

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // 현재 페이지에 해당하는 아이템만 추출
    const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/');
    };
    return (
        <Wrapper>
            <Banner>
                <text onClick={goToMain}>IB</text>
            </Banner>
            <Title>아이디어 모아보기</Title>
            <ListContainer>
                {currentItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </ListContainer>
            <Pagination>
                <PageButton 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    이전
                </PageButton>
                <span>페이지 {currentPage} / {totalPages}</span>
                <PageButton 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    다음
                </PageButton>
            </Pagination>
        </Wrapper>
    );
};

export default List;
