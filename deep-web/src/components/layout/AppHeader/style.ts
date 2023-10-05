import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const HeaderContainer = styled.div`
	width: 100%;
	height: 40px;
	background: #fff;
`;

export const AppHeaderBox = styled(DefaultBox)`
    position: relative;
    padding: 0 20px;
    a {
        img {
            height: 140px;
            margin: -5px 0;
        }
    }
`

export const HeaderButtonBox = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    right: 20px;
    display: flex;
    align-items: center;
`
export const HeaderButton = styled.a`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #ededed;
    margin-left: 10px;

    & > img {
        width: 14px;
        height: 14px !important;
        color: #495057;
        margin: 8px !important;
    }
`