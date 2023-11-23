import React from "react";
import * as l from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "../../hooks/Login/useLogin";

const Login = () => {
  const { formValue, onChangeFormValue, loginUser } = useLogin();
  const navigation = useNavigate();

  return (
    <>
      <l.LoginSection>
        <l.Title>로그인</l.Title>

        <l.Form as="form" onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}>
          <l.UserName
            type="text"
            placeholder="아이디를 입력해주세요"
            name="userId"
            onChange={onChangeFormValue}
            value={formValue.userId}
          />
          <l.PassWord
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={onChangeFormValue}
            value={formValue.password}
          />

          <l.CheckContainer>
            <l.Wrap />
          </l.CheckContainer>
          <l.LoginBtn type="submit">로그인</l.LoginBtn>

          <l.SignBtn
            onClick={() => {
              navigation("/signup");
            }}
          >
            회원가입
          </l.SignBtn>
        </l.Form>
      </l.LoginSection>
    </>
  );
};

export default Login;
