import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GithubCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // 백엔드로 code 전송
      fetch("http://localhost:9000/github/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // 사용자 정보 저장 등 처리
            localStorage.setItem("userData", JSON.stringify(data.user));
            navigate("/landing-page");
          } else {
            alert("GitHub 로그인 실패");
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
          navigate("/login");
        });
    }
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
}

export default GithubCallback;
