import {
  Container,
  Message,
  LogoutButton,
  TopBar,
  PageContent,
  CategoryButton,
} from "./LandingPage.style";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "./logout/logoutLogic.js";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LandingPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [showWelcome, setShowWelcome] = useState(true);
  const [showCategory, setShowCategory] = useState(false);

  const categories = ["공지사항", "스터디 모집", "코드 리뷰", "카페"];

  const localUserData = localStorage.getItem("userData");
  const parsedData = localUserData ? JSON.parse(localUserData) : null;
  const nickname = location.state?.nickname || parsedData?.nickname || "사용자";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setShowCategory(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
        <AnimatePresence mode="wait">
          {showWelcome && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <Message>
                환영합니다!
                <br />
                {nickname}님
              </Message>
            </motion.div>
          )}

          {showCategory && (
            <motion.div
              key="category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Message>원하는 카테고리를 선택해주세요.</Message>
              <div>
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    onClick={() =>
                      navigate(`/board/${encodeURIComponent(category)}`)
                    }
                  >
                    {category}
                  </CategoryButton>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageContent>
    </Container>
  );
}

export default LandingPage;
