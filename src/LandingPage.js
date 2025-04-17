import {
  Container,
  Message,
  LogoutButton,
  TopBar,
  PageContent,
} from "./LandingPage.style";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "./logout/logoutLogic.js";
import { useDispatch } from "react-redux";

function LandingPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const localUserData = localStorage.getItem("userData");
  const parsedData = localUserData ? JSON.parse(localUserData) : null;
  const nickname = location.state?.nickname || parsedData?.nickname || "사용자";

  const Logout = async () => {
    await handleLogout(dispatch); //dispatch 넘김
    navigate("/login-page");
  };

  return (
    <Container>
      <TopBar>
        <logo>toy-board</logo>
        <LogoutButton onClick={Logout}>로그아웃</LogoutButton>
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
