import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  ErrorMessage,
  SignupLink,
  LoginButton,
} from "./RegistrationPage.style";

function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setPasswordConfirmError("");

    if (!username) {
      setUsernameError("아이디를 입력해주세요.");
      valid = false;
    } else if (localStorage.getItem("userData")) {
      const stored = JSON.parse(localStorage.getItem("userData"));
      if (stored.username === username) {
        setUsernameError("이미 사용 중인 아이디입니다.");
        valid = false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("유효하지 않은 이메일 형식입니다.");
      valid = false;
    }

    const pwRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      valid = false;
    } else if (!pwRegex.test(password)) {
      setPasswordError(
        "비밀번호는 최소 8자, 대문자 1개, 숫자 1개, 특수문자 1개 이상 포함해야 합니다."
      );
      valid = false;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      valid = false;
    }

    return valid;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    setSignupError("");
    setSignupSuccess("");

    if (!validateForm()) {
      setSignupError("회원가입에 실패했습니다. 입력값을 다시 확인해주세요.");
      setIsSigningUp(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          nickname,
        }),
      });

      if (response.ok) {
        setSignupSuccess(
          "회원가입이 완료되었습니다. 로그인 페이지로 이동합니다."
        );
        setTimeout(() => navigate("/"), 2000);
      } else {
        const errorData = await response.json();
        setSignupError(errorData.message || "회원가입 중 오류가 발생했습니다.");
      }
    } catch (error) {
      setSignupError("서버와의 연결에 실패했습니다.");
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignupSubmit}>
        <Title>회원가입</Title>

        <Label>아이디</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용할 아이디를 입력하세요"
          required
        />
        {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}

        <Label>이메일</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력하세요"
          required
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          required
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
          required
        />
        {passwordConfirmError && (
          <ErrorMessage>{passwordConfirmError}</ErrorMessage>
        )}

        <Label>닉네임</Label>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="표시할 닉네임을 입력하세요"
          required
        />

        <LoginButton type="submit" disabled={isSigningUp}>
          {isSigningUp ? "회원가입 중..." : "회원가입"}
        </LoginButton>

        {signupError && <ErrorMessage>{signupError}</ErrorMessage>}
        {signupSuccess && <ErrorMessage>{signupSuccess}</ErrorMessage>}

        <SignupLink>
          이미 계정이 있으신가요? <Link to="/">로그인</Link>
        </SignupLink>
      </Form>
    </Container>
  );
}

export default RegistrationPage;
