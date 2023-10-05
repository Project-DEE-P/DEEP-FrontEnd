import React, { useState } from "react";
import * as m from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
    isOpen: boolean;
    onYes: () => void;
    onNo: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onYes, onNo }) => {
    const navigation = useNavigate();   
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!isOpen) return null;

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

    const handleYes = () => {
        handleOpenModal(); 
      };
    
      const handleNo = () => {
        handleCloseModal();
      };
    

    return (
        <m.ModalOverlay>
            <m.ModalContent>
                <p>기억하시겠습니까?</p>
                <m.ButtonContainer>
                    <m.YesButton onClick={handleYes}>예</m.YesButton>
                    <m.NoButton onClick={handleNo}>아니요</m.NoButton>
                </m.ButtonContainer>
            </m.ModalContent>
        </m.ModalOverlay>
    )
}

export default Modal