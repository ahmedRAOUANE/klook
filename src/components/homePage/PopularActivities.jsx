import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards';
import GetData from '../GetData';

const PopularActivities = () => {
    const data = GetData("activities");

    return (
        <Container sx={{ mb: 6 }}>
            <Typography component={"h2"} variant='h4' my={3}>
                Popular activities
                <Button style={{ float: "right", color: 'black' }}>see more</Button>
            </Typography>
            <Grid style={{ alignItems: "flex-end" }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((card, idx) => (
                    <Grid item xs={8} md={3} key={card.id} style={{ display: idx < 4 ? 'block' : 'none' }}>
                        <Cards cardInfo={card} lnk="activity" />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default PopularActivities
