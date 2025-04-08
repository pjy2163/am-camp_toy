import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  ErrorMessage,
  ForgotLink,
  SignupLink,
  SocialButton,
  SocialBox,
  Divider,
  DividerBox,
  SaveId,
  LoginButton,
} from "./LoginPage.style";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const saveIdRef = useRef(null);
  const navigate = useNavigate();

  const onLoginIdChange = (e) => setLoginId(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.email === loginId &&
      storedData.password === password
    ) {
      navigate("/landing-page");
      if (saveIdRef.current.checked) {
        localStorage.setItem("savedId", loginId);
      } else {
        localStorage.removeItem("savedId");
      }
    } else {
      setLoginError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }

    setIsLoggingIn(false);
  };

  return (
    <Container>
      <Form onSubmit={handleLoginSubmit}>
        <Title>로그인</Title>

        <Label>아이디</Label>
        <Input
          type="text"
          value={loginId}
          onChange={onLoginIdChange}
          placeholder="아이디를 입력해 주세요"
          required
        />

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력해 주세요"
          required
        />

        <SaveId>
          <label>
            <input type="checkbox" ref={saveIdRef} />
            아이디 저장
          </label>
        </SaveId>

        <LoginButton type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? "로그인 중..." : "로그인"}
        </LoginButton>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <ForgotLink>
          <Link to="/forgot-id-password">아이디/비밀번호 찾기</Link>
        </ForgotLink>

        <DividerBox>
          <Divider />
          <span>또는</span>
          <Divider />
        </DividerBox>

        <SocialBox>
          <SocialButton>
            <FaGoogle className="google" />
          </SocialButton>
          <SocialButton>
            <FaFacebookF className="facebook" />
          </SocialButton>
          <SocialButton>
            <FaApple className="apple" />
          </SocialButton>
        </SocialBox>

        <SignupLink>
          아직 계정이 없으신가요? <Link to="/registration-page">회원가입</Link>
        </SignupLink>
      </Form>
    </Container>
  );
}

export default LoginPage;
