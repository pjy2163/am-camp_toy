import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    const sendCode = async () => {
      try {
        const res = await fetch("http://localhost:9000/auth/google/callback", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 쿠키저장허용
          body: JSON.stringify({ code }),
        });

        if (res.ok) {
          const data = await res.json();
          console.log("로그인 성공:", data);
          localStorage.setItem(
            "userData",
            JSON.stringify({ nickname: data.nickname })
          );
          //로그확인
          console.log("data.nickname:", data.nickname);
          navigate("/landing-page", { state: { nickname: data.nickname } });
        } else {
          console.error("로그인 실패");
        }
      } catch (err) {
        console.error("에러 발생", err);
      }
    };

    if (code) sendCode();
  }, [navigate]);

  return <p>구글 로그인 중입니다...</p>;
}

export default GoogleCallback;
