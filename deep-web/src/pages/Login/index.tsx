import React, { useState } from "react";
import * as l from "./style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navagation = useNavigate();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();

    console.log("로그인할래!");
  };

  const login = () => {
    if (formValue.username === "" || formValue.password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
  };

  return (
    <>
      <l.LoginSection>
        <l.Title>로그인</l.Title>

        <l.Form as="form" onSubmit={onSubmit}>
          <l.UserName
            type="text"
            placeholder="아이디를 입력해주세요"
            name="username"
            onChange={onChangeFormValue}
            value={formValue.username}
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
            <l.Search>
              <l.FindUser>아이디찾기</l.FindUser>
              <l.Bar />
              <l.FindUser>비밀번호 찾기</l.FindUser>
            </l.Search>
          </l.CheckContainer>

          <l.LoginBtn type="submit">로그인</l.LoginBtn>

          <l.SignBtn
            onClick={() => {
              navagation("/register");
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