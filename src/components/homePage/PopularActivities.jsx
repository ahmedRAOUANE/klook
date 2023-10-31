import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards';
import GetData from '../GetData';

const PopularActivities = () => {
    const data = GetData("activities");

    return (
        <Container sx={{mb: 6}}>
            <Typography component={"h2"} variant='h4' my={3}>
                Popular activities
                <Button style={{float: "right", color: 'black'}}>see more</Button>
            </Typography>
            <Box>
                <Grid style={{ justifyContent: 'space-between' }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((card, idx) => (
                        <Grid item key={card.id} style={{ display: idx < 4 ? 'block' : 'none', margin: 'auto' }}>
                            <Cards cardInfo={card} lnk="activity" />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default PopularActivities
