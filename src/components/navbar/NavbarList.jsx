import { List, ListItem, ListItemButton } from '@mui/material'
import React from 'react'
import { icons } from '../icons'
import { Link } from 'react-router-dom'

// icons 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const NavbarList = ({ open, show }) => {

  return (
        <List sx={{ 
                display: "flex", 
                alignItems:"center", 
                fontSize: "12px", 
                fontWeight: "500", 
                "& > li": {padding: 0, width: "auto", mx: "2px"},
                "& a": {textDecoration: "none"}, 
                "& div": { padding: "0 10px", borderRadius: "20px", display: "flex", alignItems:"center", height: "36px"}, 
                "@media (max-width: 767px)": {
                    display: show ? "block" : "none",
                    position: "absolute",
                    background: "white",
                    top: "120%",
                    right: "8%",
                    zIndex: "4",
                    boxShadow: "0 0 24px 4px #00000052",
                    padding: "10px",
                    borderRadius: "25px"
                }
                }}
            >
                <ListItem onClick={() => open("language")}>
                    <ListItemButton>
                        {icons.lang}
                        <ArrowDropDownIcon />
                    </ListItemButton>
                </ListItem>
                <ListItem onClick={() => open("currencies")}>
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
  )
}

export default NavbarList