import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container } from "@mui/material";
import Modal from "react-modal";
import styled from '@emotion/styled'

// components
import SearchInput from "./SearchInput";
import Language from "./Language";
import Currencies from "./Currencies";
import NavbarList from "./NavbarList";

// icons
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { icons } from "../icons";

const Input = styled("div")(() => ({
    backgroundColor: "#f5f5f5",
    padding: "7px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    '& > input': {
        backgroundColor: "#f5f5f5",
        border: "none",
        width: "100%"
    },
    '& > input:focus': {
        outline: "none",
    }
}))

const customStyles = {
    content: {
        boxShadow: "rgb(0 0 0 / 34%) 0px 0px 20px 6px, 0 0 1px 1px #d1d1d1",
        borderRadius: "20px",
        position: "absolute",
        inset: "9% 0 0 50%",
        height: "70%",
        width: "80%",
        transform: "translateX(-50%)",
        border: "none",
        '@media(min-width: 768px)': {
            width: "60%",
        }
    },
    overlay: {
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "trasparent",
        backdropFilter: 'blur(2px) brightness(0.5)',
        zIndex: 100
    }
};

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState("close");
    const [show, setShow] = useState(false);

    const openPopup = (type) => {
        setPopup(`open-${type}`);
        setIsOpen(true);
    }

    const closePopup = () => {
        setPopup(`close}`);
        setIsOpen(false)
    }

    const chosePopup = () => {
        if (popup === "open-search") {
            return <SearchInput closePopup={closePopup} />;
        } else if (popup === "open-language") {
            return <Language closePopup={closePopup} />;
        } else if (popup === "open-currencies") {
            return <Currencies closePopup={closePopup} />;
        } else if (popup === "open-list") {
            <NavbarList open={openPopup} />
        }
    }

    const showList = () => setShow(!show);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            backgroundColor: "#fff",
            boxShadow: "0 0 20px 7px #00000080"
        }}>
            <Container
                sx={{
                    "@media(min-width: 768px)": {
                        borderBottom: "1px solid #eee",
                    },
                    padding: '0', display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    my: "5px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to="/" style={{ marginRight: "20px" }}>
                        {icons.brand}
                    </Link>
                    <Input >
                        <SearchIcon />
                        <input type="serch" placeholder="search" onClick={() => openPopup("search")} />
                    </Input>
                </div>

                <Button sx={{
                    ml: '18px',
                    minWidth: 'fit-content',
                    borderRadius: "20px",
                    color: 'black',
                    "@media (min-width: 768px)": {
                        display: "none",
                    }
                }}
                    onClick={showList}
                >
                    <DensityMediumIcon />
                </Button>

                <NavbarList open={openPopup} show={show} />

                <Modal isOpen={isOpen} onRequestClose={closePopup} style={customStyles}>
                    {chosePopup()}
                </Modal>
            </Container>
        </nav>
    )
}

export default Navbar;