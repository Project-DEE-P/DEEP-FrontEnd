import React from "react";
import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";
import AppHeader from "../../../components/layout/AppHeader";

const PageContainer = styled(DefaultBox)`
    min-height: calc(100vh - 40px);
`
const NFCContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-top: 18%;
`

const NFCTitle = styled.p`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
`
const CardContainer = styled.div`
    
`

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <AppHeader />
            <PageContainer>
                <NFCContainer>
                    <NFCTitle>최희건 님의 <span style={{ color: '#1775F9' }}>DEE:P</span> 명함</NFCTitle>
                </NFCContainer>

            </PageContainer>
        </>
    )
}

export default Layout;