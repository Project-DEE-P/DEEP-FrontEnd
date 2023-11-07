import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import axios from "axios";

const SignUp = () => {
  const [formRegister, setFormRegister] = useState({
    userId: "",
    password: "",
    pwCheck: "",
    name: "",
    email: "",
  });
  const { userId, password, pwCheck, name, email } = formRegister;
  const navigation = useNavigate();

  const onChangeFormRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const onClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!userId) {
      alert("아이디를 입력하세요.");
      return;
    }

    const userIdString = String(userId);

    try {
      const response = await axios.post(
        `http://10.80.163.49:8081/v1/api/auth/id-check`,
        { userId: userIdString },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.status === 201) {
        alert(response.data.message);
      } else if (response.status === 400) {
        alert(response.data.message);
      } else if (response.status === 500) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
  
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
  
    try {
      const userData = {
        userId: userId,
        password: password,
        name: name,
        email: email,
      };
  
      const response = await axios.post(
        "http://10.80.163.49:8081/v1/api/auth/signup",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data.code === 200) {
        alert("회원가입 성공");
        navigation("/login");
      } else if (response.data.code === 500) {
        alert("INTERNAL SERVER ERROR");
      }
    } catch (error) {
      console.error(error);
    }
  }, [userId, name, password, pwCheck, email, navigation]);

  function isId(userId: string) {
    // let regExp = /[a-zA-Z0-9]/;
    // return regExp.test(userId);
    return true;
  }

  function isPassword(password: string) {
    // let regExp =
    //   /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    // return regExp.test(password);
    return true;
  }

  function isEmail(email: string) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }

  return (
    <>
      <s.Wrap>
        <s.Title>회원가입</s.Title>
      </s.Wrap>

      <s.RegisterSection>
        <form>
          <s.Bar>
            <s.Red>*</s.Red>필수입력사항
          </s.Bar>

          <s.Table>
            <div>
              <s.Content>
                <s.Id>
                  <s.Name>
                    아이디<s.Red>*</s.Red>
                  </s.Name>
                </s.Id>
                <s.Div>
                  <s.Input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    name="userId"
                    onChange={onChangeFormRegister}
                    value={userId}
                  />
                </s.Div>
                <s.Check>
                  <s.CheckBtn onClick={onClick}>중복확인</s.CheckBtn>
                </s.Check>
              </s.Content>
            </div>

            <div>
              <s.Content>
                <s.Id>
                  <s.Name>
                    비밀번호<s.Red>*</s.Red>
                  </s.Name>
                </s.Id>
                <s.Div>
                  <s.Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    onChange={onChangeFormRegister}
                    value={password}
                  />
                </s.Div>
              </s.Content>
            </div>

            <div>
              <s.Content>
                <s.Id>
                  <s.Name>
                    비밀번호 확인<s.Red>*</s.Red>
                  </s.Name>
                </s.Id>
                <s.Div>
                  <s.Input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                    name="pwCheck"
                    onChange={onChangeFormRegister}
                    value={pwCheck}
                  />
                </s.Div>
              </s.Content>
            </div>

            <div>
              <s.Content>
                <s.Id>
                  <s.Name>
                    이름<s.Red>*</s.Red>
                  </s.Name>
                </s.Id>
                <s.Div>
                  <s.Input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    name="name"
                    onChange={onChangeFormRegister}
                    value={name}
                  />
                </s.Div>
              </s.Content>
            </div>

            <div>
              <s.Content>
                <s.Id>
                  <s.Name>
                    이메일<s.Red>*</s.Red>
                  </s.Name>
                </s.Id>
                <s.Div>
                  <s.Input
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    name="email"
                    onChange={onChangeFormRegister}
                    value={email}
                  />
                </s.Div>
              </s.Content>
            </div>
          </s.Table>

          <s.Reg>
            <s.Register onClick={onSubmit}>가입하기</s.Register>
          </s.Reg>
        </form>
      </s.RegisterSection>
    </>
  );
};

export default SignUp;
