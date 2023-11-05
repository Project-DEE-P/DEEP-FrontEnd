import styled from "styled-components";

export const LoginSection = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`;

export const Form = styled.div`
  padding-top: 36px;
  text-align: center;
`;

export const UserName = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  outline: none;
`;

export const PassWord = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  margin-top: 10px;
`;

export const CheckContainer = styled.div`
  overflow: hidden;
  padding-bottom: 26px;
`;

export const Wrap = styled.div`
  float: left;
  margin-top: 9px;
`;

export const InputCheck = styled.input`
  margin-right: 3px;
  margin-top: 3px;
  display: inline-block;
  width: 18px;
  height: 14px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 15px;
`;

export const Search = styled.div`
  float: right;
  padding-top: 13px;
`;

export const FindUser = styled.p`
  float: left;
  font-size: 13px;
  background-color: transparent;
  text-decoration: none;
  color: black;
  margin-top: -0.5%;
`;

export const Bar = styled.span`
  float: left;
  width: 1px;
  height: 10px;
  margin: 3px 6px 0;
  background-color: #333;
`;

export const LoginBtn = styled.button`
  color: #fff;
  border-style: none;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--blue-500, #1775F9);
  height: 54px;
  border-radius: 3px;
  text-align: center;
  width: 150%;
  max-width: 380px;
`;

export const SignBtn = styled.button`
  color: #1775F9;
  border-style: none;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #1775F9;
  height: 54px;
  border-radius: 3px;
  text-align: center;
  width: 150%;
  max-width: 380px;
  margin-top: 10px;
`;