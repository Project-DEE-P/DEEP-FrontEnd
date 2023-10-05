import styled from "styled-components";

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
`;

export const ModalContent = styled.div`
background: #fff;
border-radius: 8px;
padding: 20px;
text-align: center;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

export const Button = styled.button`
margin: 0 10px;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
`;

export const YesButton = styled(Button)`
background-color: #007bff;
color: #fff;
`;

export const NoButton = styled(Button)`
background-color: #ccc;
color: #333;
`;