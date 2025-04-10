import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #444;
  display: block;
`;

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 94%;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4f46e5;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #dc2626;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #4338ca;
  }
`;

export const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const SuccessMessage = styled.p`
  font-size: 13px;
  color: #16a34a;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
`;
