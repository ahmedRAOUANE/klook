import { Box, Button, Container, List, ListItem, ListItemButton, Typography } from '@mui/material';

const PageHeader = () => {
    return (
        <Container
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: 0,
                "@media(max-width: 767px)": {
                    display: 'none'
                }
                }}
        >
            <List sx={{ 
                display: "flex", 
                alignItems:"center",
                fontWeight: "500", 
                "& > li": {padding: 0, width: "auto", mx: "2px"},
                "& div": { padding: "0 10px", borderRadius: "20px", display: "flex", alignItems:"center", height: "36px"}, 
                }}
            >
                {["Explore destinations", "All categories", "Tour & experiences", "Attraction tickets", "Hotels", "Transport", "Car rentals", "..."].map(link => (
                    <ListItem key={link}>
                        <ListItemButton>
                            {link}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box>
                <Button sx={{padding: "0 10px", borderRadius: "20px", display: "flex", alignItems:"center", height: "36px"}}>
                    <img 
                        src="https://res.klook.com/image/upload/v1639126248/brand%20refresh%20category%20icon/desktop/category_36_gift_card.png" 
                        alt="gift" 
                        style={{width: '24px', marginRight: '10px'}}
                    />
                    <Typography>Gift cards</Typography>
                </Button>
            </Box>
        </Container>
    )
}

export default PageHeader;