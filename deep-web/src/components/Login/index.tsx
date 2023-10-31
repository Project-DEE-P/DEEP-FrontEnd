import React, { useState } from "react";
import * as l from "./style";
import axios from "axios";

const Login = () => {
    return (
        <l.LoginContainer>
            <l.LoginForm>
                <l.Label>아이디</l.Label>
                <l.Input/>
                <l.Label>비밀번호</l.Label>
                <l.Input/>
                    <l.LoginButton>
                        <span>로그인</span>
                    </l.LoginButton>
            </l.LoginForm>
        </l.LoginContainer>
    )
};

export default Login;