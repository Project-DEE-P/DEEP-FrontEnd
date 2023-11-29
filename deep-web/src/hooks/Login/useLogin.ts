import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import customAxios from "src/lib/customAxios";
import { toast } from "react-toastify";
import { rmSync } from "fs";

interface User {
  userId: string;
  password: string;
}

const useLogin = () => {
  const apiServer = "https://api.ddeep.store";
  const navigation = useNavigate();
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

  const loginUser = async () => {
    try {
      const { userId, password } = formValue;

      const response = await customAxios.post(`${apiServer}/v1/api/auth/login`, {
        userId,
        password,
      });

      if (response.status === 201) {
        console.log("로그인 성공!");
        toast.success("로그인에 성공했습니다!");
        
        localStorage.setItem('Token', response.data.data.token);
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

  return { formValue, onChangeFormValue, loginUser };
};

export default useLogin;
