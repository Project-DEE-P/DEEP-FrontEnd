import React, { useState } from "react";
import * as l from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navagation = useNavigate();

  const [formValue, setFormValue] = useState({
    id: "",
    pw: "",
  });

  const onChangeFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://10.80.163.49:8081/v1/api/auth/login", {
        id: formValue.id,
        pw: formValue.pw,
      });

      if (response.status === 200) {
        console.log("로그인 성공!");
        console.log(response.data);
      }
    } catch (error) {
      console.log("로그인 실패", error);
      window.alert("로그인 실패: 아이디 혹은 비밀번호가 올바르지 않습니다.");
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
            name="id"
            onChange={onChangeFormValue}
            value={formValue.id}
          />
          <l.PassWord
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="pw"
            onChange={onChangeFormValue}
            value={formValue.pw}
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