import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const PageContainer = styled(DefaultBox)`
    min-height: calc(100vh - 40px);
    overflow: hidden;
`;
export const NFCContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-top: 15%;
`

export const NFCTitle = styled.p`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    
`
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: centet;
    margin-top: 10%;
    a {
        img {
            height: 190px;
        }
    }
`
export const MemoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-top: 15%;
`

export const WriteMemo = styled.p`
    color: var(--gray-300, #8C9AAB);;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
`;

export const RememberButton = styled.button`
    width: 328px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 16px;
    background: var(--blue-400, #4591FA);
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
`;

