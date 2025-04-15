import { Container, Message, LogoutButton, TopBar } from "./LandingPage.style";
import { useLocation, useNavigate } from "react-router-dom";

function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const localUserData = localStorage.getItem("userData");
  const parsedData = localUserData ? JSON.parse(localUserData) : null;
  const nickname = location.state?.nickname || parsedData?.nickname || "사용자";

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:9000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        localStorage.removeItem("userData");
        navigate("/");
      } else {
        alert("로그아웃 실패");
      }
    } catch (err) {
      console.error("에러 발생", err);
    }
  };

  return (
    <Container>
      <TopBar>
        <logo>toy-board</logo>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </TopBar>

      <PageContent>
        <Message>
          환영합니다!
          <br />
          {nickname}님
        </Message>
      </PageContent>
    </Container>
  );
}

export default LandingPage;
