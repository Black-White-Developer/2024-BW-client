import styled from "styled-components";

const Logo = styled.div`
  width: 100%;
  height: 40px;
  background-color: #bcd0ff;
  color: #000000;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
`;
export default function logoBar() {
  return (
    <>
      <Logo>서비스이름</Logo>
    </>
  );
}
