import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PostCard = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Writer = styled.p`
  font-size: 14px;
  color: #666;
`;

export const WriteButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
