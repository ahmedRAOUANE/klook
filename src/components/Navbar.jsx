import { useState } from "react";
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container, Box, List, ListItem, ListItemButton, styled } from "@mui/material";
import Modal from "react-modal";
import SearchInput from "./SearchInput";
import SearchIcon from '@mui/icons-material/Search';
import Language from "./Language";
import Currencies from "./Currencies";
import { icons } from "./icons";

const Input = styled("div")(() => ({
    width: "280px",
    backgroundColor: "#f5f5f5",
    padding: "7px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    '& > input':{
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
        backdropFilter: 'blur(2px) brightness(0.5)',
    }
};

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState("close");

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
        }
    }

    return (
        <Box sx={{borderBottom: "1px solid #eee"}}>
            <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", my: "5px"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Link to="/" style={{marginRight: "20px"}}>
                        {icons.brand}
                    </Link>
                    <Input >
                        <SearchIcon />
                        <input type="serch" placeholder="search" onClick={() => openPopup("search")} />
                    </Input>
                </div>
                <List sx={{ 
                    display: "flex", 
                    alignItems:"center", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    "& > li": {padding: 0, width: "auto", mx: "2px"},
                    "& a": {textDecoration: "none"}, 
                    "& div": { padding: "0 10px", borderRadius: "20px", display: "flex", alignItems:"center", height: "36px"}, 
                    }}
                >
                    <ListItem onClick={() => openPopup("language")}>
                        <ListItemButton>
                            {icons.lang}
                            <ArrowDropDownIcon />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => openPopup("currencies")}>
                        <ListItemButton>
                            USD
                            <ArrowDropDownIcon />
                        </ListItemButton>
                    </ListItem>
                    {["Go To App", "Help", "Recently Viewed", "Sign up", "log in"].map(link => (
                        <ListItem key={link}>
                            <ListItemButton sx={{
                                backgroundColor: link === "log in" ? "#ff5b00" : "",
                                "&:hover": {backgroundColor: link === "log in" ? "#ff5b00" : ""},
                                "& a": {color: link === "log in" ? "#fff" : "#000"},
                            }}
                            >
                                <Link to={link}>
                                    {link}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Container>
            <Modal isOpen={isOpen} onRequestClose={closePopup} style={customStyles}>
                {chosePopup()}
            </Modal>
        </Box>
    )
}

export default Navbar;