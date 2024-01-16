export const getAccessToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  return localStorage.getItem("accessToken");
};

export const MIN_PASSWORD_LENGTH = 8;

export const MSG_INVALID_PASSWORD_FORMAT =
  "영문, 숫자를 조합해 8자 이상 입력해 주세요.";

export const MSG_NOT_SAME_PASSWORD_CONFIRM = "비밀번호가 일치하지 않아요.";
