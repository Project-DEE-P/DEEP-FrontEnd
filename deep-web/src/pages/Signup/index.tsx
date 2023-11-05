import React, { useState } from "react";
import * as s from "./style";
import axios from "axios";

const SignUp = () => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
    pwCheck: "",
    name: "",
    email: "",
  });

  const { username, password, pwCheck, name, email } = formRegister;

  const onChangeFormRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 중복 확인 로직을
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !name || !password || !pwCheck || !email) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    if (password !== pwCheck) {
      alert("패스워드가 서로 일치하지 않습니다.");
      return;
    }
    if (!isId(username)) {
      alert("아이디를 다시 입력해주세요");
      return;
    }

    if (!isPassword(password)) {
      alert("비밀번호를 다시 입력해주세요");
      return;
    }

    try {
        const userData = {
            userId: username,
            password: password,
            name: name,
            email: email,
          };

          const response = await axios.post("http://10.80.163.222:8081/v1/api/auth/signup", userData);

          if (response.status === 201) {
            alert("회원가입 성공");
          } else {
            alert("회원가입 실패");
          }
    } catch (error) {
        console.error(error)
    }
  };

  function isId(username: string) {
    let regExp = /[a-zA-Z0-9]/;
    return regExp.test(username);
  }

  function isPassword(password: string) {
    let regExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regExp.test(password);
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
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    name="username"
                    onChange={onChangeFormRegister}
                    value={username}
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
                    name="nickname"
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
                    name="address"
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