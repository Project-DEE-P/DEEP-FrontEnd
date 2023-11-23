import { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import userInfoAtom from "src/atoms/userInfo";
import { toast } from "react-toastify";

const useSignUp = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const serverUrl = "https://api.ddeep.store";
  const [isIdChecked, setIsIdChecked] = useState(false);
  const navigation = useNavigate();

  const signUp = useCallback(
    async (userId: string, name: string, password: string, pwCheck: string, email: string) => {
      try {
        if (!userId || !name || !password || !pwCheck || !email) {
          alert("빈칸을 모두 채워주세요.");
          return;
        }

        if (password !== pwCheck) {
          alert("패스워드가 서로 일치하지 않습니다.");
          return;
        }

        if (!isId(userId)) {
          alert("아이디를 다시 입력해주세요.");
          return;
        }

        if (!isPassword(password)) {
          alert("비밀번호를 다시 입력해주세요.");
          return;
        }

        if (!isEmail(email)) {
          alert("이메일이 올바르지 않습니다.");
          return;
        }

        const userData = {
          userId: userId,
          password: password,
          name: name,
          email: email,
        };

        const response = await axios.post(`${serverUrl}/v1/api/auth/signup`, userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          toast.success("회원가입에 성공했습니다!");
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            name: userData.name,
          }));
          navigation("/login");
        } else if (response.status === 500) {
          alert("INTERNAL SERVER ERROR");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [setUserInfo, navigation]
  );

  const isId = (userId: string) => {
    // Your validation logic for the ID
    return true;
  };

  const isPassword = (password: string) => {
    // Your validation logic for the password
    return true;
  };

  const isEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return { signUp };
};

export default useSignUp;
