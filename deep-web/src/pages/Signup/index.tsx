import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import userInfoAtom from "src/atoms/userInfo";
import { toast } from "react-toastify";
import * as s from "./style";
import axios from "axios";
import useSignUp from "src/hooks/Signup/useSignup";
import { useRecoilState } from "recoil";

const SignUp = () => {
  const [userinfo, setUserInfo] = useRecoilState(userInfoAtom);
  const serverUrl = "https://api.ddeep.store";
  const { userId, password, pwCheck, name, email } = userinfo;
  const navigation = useNavigate();
  const { signUp } = useSignUp();
  const [isIdChecked, setIsIdChecked] = useState(false);

  const onChangeFormRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));

    setIsIdChecked(false);
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
        `${serverUrl}/v1/api/auth/id-check`,
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

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      signUp(userId, name, password, pwCheck, email);
    },
    [userId, name, password, pwCheck, email]
  );

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