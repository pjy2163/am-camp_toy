import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate로 변경

const SignupPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const [errors, setErrors] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const navigate = useNavigate(); // useNavigate로 변경

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = userInfo;
    let valid = true;
    const newErrors = { ...errors };

    if (username.length < 5) {
      newErrors.usernameError = '아이디는 5자 이상이어야 합니다.';
      valid = false;
    } else {
      newErrors.usernameError = '';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      newErrors.emailError = '유효한 이메일을 입력해주세요.';
      valid = false;
    } else {
      newErrors.emailError = '';
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
      newErrors.passwordError = '비밀번호는 대문자, 숫자, 특수문자를 포함해야 하며, 8자 이상이어야 합니다.';
      valid = false;
    } else {
      newErrors.passwordError = '';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPasswordError = '비밀번호가 일치하지 않습니다.';
      valid = false;
    } else {
      newErrors.confirmPasswordError = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSigningUp(true);
    setSignupError('');
    setSignupSuccess('');

    // 회원가입 성공 후
    setTimeout(() => {
      setIsSigningUp(false);
      setSignupSuccess('회원가입이 성공적으로 완료되었습니다!');
      navigate('/login'); // 회원가입 후 로그인 페이지로 이동
    }, 2000);
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>회원 가입</h2>
      <form onSubmit={handleSignupSubmit} 
      style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            placeholder="사용할 아이디를 입력하세요"
            required
          />
          {errors.usernameError && <p style={{ color: 'red' }}>{errors.usernameError}</p>}
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="이메일 주소를 입력하세요"
            required
          />
          {errors.emailError && <p style={{ color: 'red' }}>{errors.emailError}</p>}
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            required
          />
          {errors.passwordError && <p style={{ color: 'red' }}>{errors.passwordError}</p>}
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
          {errors.confirmPasswordError && <p style={{ color: 'red' }}>{errors.confirmPasswordError}</p>}
        </div>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            value={userInfo.nickname}
            onChange={handleChange}
            placeholder="표시할 닉네임을 입력하세요"
            required
          />
        </div>
        <button type="submit" disabled={isSigningUp}>
          {isSigningUp ? '회원가입 중...' : '회원가입'}
        </button>
        {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
        {signupSuccess && <p style={{ color: 'green' }}>{signupSuccess}</p>}
        <div style={{ marginTop: '10px' }}>
          <p>이미 계정이 있으신가요? <a href="/login">로그인</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
