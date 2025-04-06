import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';  
import SignupPage from './SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>환영합니다. 우리의 게시판</h1>
            <Link to="/login">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>로그인</button>
            </Link>
            <br />
          </div>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
