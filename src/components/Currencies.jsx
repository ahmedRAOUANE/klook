import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";


const popularCurrencies = [
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
    {title: 'singapore Dollar', icon: 'SGD', state: 'popular'},
]

const moreCurrencies = [
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
    {title: 'australian Dollar', icon: 'AUD', state: ''},
]

const Currencies = () => {
    return (
    <Box>
        <div>
            <Typography variant="h5" component={'h3'} >popular Currencies</Typography>
            <Box>
                <List sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {popularCurrencies.map(currency => (
                        <ListItem sx={{flex: '1'}}>
                            <ListItemButton>
                                <ListItemIcon>{currency.icon}</ListItemIcon>
                                <ListItemText style={{fontSize: '0.8rem'}}>{currency.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
        <div>
            <Typography variant="h5" component={'h3'} >more Currencies</Typography>
            <Box>
                <List sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {moreCurrencies.map(currency => (
                        <ListItem sx={{flex: '1'}}>
                            <ListItemButton>
                                <ListItemIcon>{currency.icon}</ListItemIcon>
                                <ListItemText sx={{fontSize: '0.8rem'}}>{currency.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    </Box>
    )
}

export default Currencies;