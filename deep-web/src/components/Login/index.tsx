import React, { useState } from "react";
import * as l from "./style";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', {
                username,
                password
            });
        } catch (err) {
            console.error('서버 에러', err);
        }
    }

return (
    <l.LoginContainer>
        <l.LoginForm onSubmit={handleSubmit}>
                <l.Input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <l.Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <l.LoginButton>
                    <span>로그인</span>
                </l.LoginButton>
            </l.LoginForm>
        </l.LoginContainer>
    );
};

export default Login;