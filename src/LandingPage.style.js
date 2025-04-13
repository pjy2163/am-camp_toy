import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
`;

// 상단 메뉴바
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background-color: #4f46e5;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 로그아웃 버튼
export const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 6px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// 메시지 영역
export const Message = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #4f46e5;
  text-align: center;
  margin: auto; /* 중앙 정렬 */

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
