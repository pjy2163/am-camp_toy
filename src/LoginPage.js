import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

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

  useEffect(() => {
    const savedId = localStorage.getItem("savedId");
    if (savedId) setLoginId(savedId);
  }, []);

  const onLoginIdChange = (e) => setLoginId(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch(
        `http://localhost:9000/login?username=${encodeURIComponent(
          loginId
        )}&password=${encodeURIComponent(password)}`
      );
      const data = await res.json();

      if (!res.ok) {
        setLoginError(data.error || "로그인 실패");
      } else {
        if (saveIdRef.current?.checked) {
          localStorage.setItem("savedId", loginId);
        } else {
          localStorage.removeItem("savedId");
        }

        localStorage.setItem("userData", JSON.stringify(data.user));
        navigate("/landing-page", { state: { nickname: data.nickname } });
      }
    } catch (error) {
      setLoginError("서버 오류가 발생했습니다.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const GithubLogin = () => {
    const clientId = "Ov23lilEFmixYGI69GW6";
    const redirectUrl = "http://localhost:3000/callback";
    const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
    window.location.href = githubURL;
  };

  const GoogleLogin = () => {
    const clientId =
      "415064006146-1k0mkvf70roktkg3ch96r4tl0bfrgu2l.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/google-callback";
    const scope = "email profile";
    const responseType = "code";
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = googleURL;
  };

  return (
    <Container>
      <Form onSubmit={handleLoginSubmit}>
        <Title>로그인</Title>

        <Label>아이디 또는 이메일</Label>
        <Input
          type="text"
          value={loginId}
          onChange={onLoginIdChange}
          placeholder="아이디 또는 이메일을 입력하세요"
          required
        />

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력하세요"
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
          <SocialButton onClick={GoogleLogin}>
            <FaGoogle className="google" />
          </SocialButton>
          <SocialButton onClick={GithubLogin}>
            <FaGithub className="github" />
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
