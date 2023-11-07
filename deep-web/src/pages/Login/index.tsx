import React, { useState, useCallback } from "react";
import * as l from "./style";
import { useNavigate } from "react-router-dom";
import { loginAxios } from "../../lib/loginAxios";

const Login = () => {
  const navagation = useNavigate();

  const [formValue, setFormValue] = useState({
    userId: "",
    password: "",
  });

  const onChangeFormValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }, [formValue]);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { userId, password } = formValue;

      const { token, refreshToken } = await loginAxios(userId, password);

      console.log("로그인 성공!");
      console.log(`Token: ${token}`);
      console.log(`Refresh Token: ${refreshToken}`);

    } catch (error) {
      console.log("로그인 실패", error);
      window.alert("로그인 실패: 서버와 통신 중 오류가 발생했습니다.");
    }
  }, [formValue]);

  return (
    <>
      <l.LoginSection>
        <l.Title>로그인</l.Title>

        <l.Form as="form" onSubmit={onSubmit}>
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
            <l.Wrap>
              <l.InputCheck type="checkbox" />
              <l.Text>보안접속</l.Text>
            </l.Wrap>
          </l.CheckContainer>

          <l.LoginBtn type="submit">로그인</l.LoginBtn>

          <l.SignBtn
            onClick={() => {
              navagation("/signup");
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
