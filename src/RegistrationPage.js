import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  ErrorMessage,
  LoginButton,
  SignupLink,
} from "./RegistrationPage.style";

function RegistrationPage() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId || !email || !nickname || !password || !confirmPassword) {
      setError("모든 항목을 입력해 주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userData = {
      userId,
      email,
      nickname,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/landing-page");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        <Label htmlFor="userId">아이디</Label>
        <Input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="아이디를 입력하세요"
          required
        />

        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
          required
        />

        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          required
        />

        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
          required
        />
        <Label htmlFor="nickname">닉네임</Label>
        <Input
          id="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력하세요"
          required
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginButton type="submit">회원가입</LoginButton>

        <SignupLink>
          이미 계정이 있으신가요? <Link to="/login-page">로그인</Link>
        </SignupLink>
      </Form>
    </Container>
  );
}

export default RegistrationPage;
