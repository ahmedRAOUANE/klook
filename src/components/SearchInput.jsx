import { Container, Box, styled, List, ListItem, ListItemButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import HotArea from "./HotArea"

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

const SearchInput = ({openPopup, closePopup}) => {

    const [popup, setPopup] = useState('close')

    openPopup();

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Input >
                        <SearchIcon />
                        <input type="serch" placeholder="search" onClick={openPopup} />
                    </Input>
                    <button style={{
                        borderRadius: "20px",
                        border: "none",
                        padding: "10px 20px",
                        cursor: "pointer"
                    }} onClick={closePopup}>Close</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: "20px", gap: "20px", height: "100%"}}>
                    <HotArea />
                    <HotArea />
                </div>
        </>
    )
}

export default SearchInput