import React, { useState } from 'react'
import Modal from "react-modal";
import SearchInput from './SearchInput';

const customStyles = {
    content: {
        boxShadow: "rgb(0 0 0 / 34%) 0px 0px 20px 6px, 0 0 1px 1px #d1d1d1",
        borderRadius: "20px",
        position: "absolute",
        inset: "9% 0 0 50%",
        height: "60%",
        width: "60%",
        transform: "translateX(-50%)",
        border: "none",
    },
    overlay: {
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "trasparent",
        backdropFilter: 'blur(2px)',
    }
};

const Popup = ({type}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        style={customStyles}
    >
        <SearchInput openPopup={openPopup} closePopup={closePopup} />
    </Modal>
  )
}

export default Popup;
