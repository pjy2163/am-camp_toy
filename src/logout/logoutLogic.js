// src/logout/logoutLogic.js
import { logout } from "./loginSlice";

export const handleLogout = async (dispatch) => {
  // 1. 로컬스토리지 제거
  localStorage.removeItem("userData");

  // 2. Redux 상태 초기화
  dispatch(logout());

  // 3. 필요 시 서버 로그아웃 요청도 가능
  // await fetch("/logout", { method: "POST" });
};
