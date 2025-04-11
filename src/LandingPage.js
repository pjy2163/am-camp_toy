import { Container, Message } from "./LandingPage.style";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();
  const localUserData = localStorage.getItem("userData");
  const parsedData = localUserData ? JSON.parse(localUserData) : null;
  const nickname = location.state?.nickname || parsedData?.nickname || "사용자";
  // const loginType = parsedData?.loginType;

  return (
    <Container>
      <Message>
        {/* {loginType === "github" ? "GitHub로 " : ""} */}
        환영합니다!
        <br />
        {nickname}님
      </Message>
    </Container>
  );
}

export default LandingPage;
