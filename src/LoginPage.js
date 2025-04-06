import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const onLoginIdChange = (e) => {
    setLoginId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); 

    setIsLoggingIn(true);
    setLoginError(''); 

    
    // if (loginId === 'test@example.com' && password === 'password123') {
    //   setLoginError('');
     
    //   history.push('/dashboard');
    // } else {
    //   setLoginError('아이디 또는 비밀번호가 틀렸습니다.');
    // }

    // setIsLoggingIn(false); // 로그인 종료
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }} 
      onSubmit={handleLoginSubmit}>
        <h1>로그인</h1>
        
        <label>아이디</label>
        <input
          type="text"
          value={loginId}
          onChange={onLoginIdChange}
          placeholder="아이디를 입력해 주세요"
          required
        />

        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호를 입력해 주세요"
          required
        />

        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? '로그인 중...' : '로그인'}
        </button>

        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

        <div style={{ marginTop: '10px' }}>
          <p>아직 계정이 없으신가요? 
          <Link to="/signup">회원가입</Link></p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
