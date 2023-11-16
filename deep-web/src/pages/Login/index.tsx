import React, { useState } from "react";
import * as l from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import customAxios from "src/lib/customAxios";

interface User {
  userId: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigate();
  const apiServer = "https://api.ddeep.store";
  const [formValue, setFormValue] = useState<User>({
    userId: "",
    password: "",
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
      const { userId, password } = formValue;

      const response = await customAxios.post(`${apiServer}/v1/api/auth/login`, {
        userId,
        password,
      });

      if (response.status === 201) {
        console.log("로그인 성공!");
        toast.success("로그인에 성공했습니다!");
        localStorage.setItem('accessToken', response.data.accessToken);
        navigation("/");
      } else {
        console.log("로그인 실패", response.data.message);
        window.alert("로그인에 실패했습니다: " + response.data.message);
      }
    } catch (error) {
      console.log("로그인 실패", error);
      window.alert("로그인에 실패했습니다: 아이디 혹은 비밀번호가 올바르지 않습니다.");
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
