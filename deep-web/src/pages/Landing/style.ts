import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: none;
    width: 100%; 
    max-width: 300px; 
`;

export const Label = styled.label`
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-width: 0 0 1px;
`;

export const LoginButton = styled.button`
    display: flex;
    width: 100%; 
    max-width: 300px; 
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #1775F9;
    border: none;

    span {
        color: #FFF;
        font-family: Pretendard;
        font-size: 18px;
    }
`;
