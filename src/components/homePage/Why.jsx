import React from 'react';
import { Container, Grid, Typography } from "@mui/material"
import Cards from './Cards';
import GetData from '../GetData';

const Why = () => {

    const data = GetData("why");

    return (
        <Container sx={{ mb: 6 }}>
            <Typography component={"h2"} variant='h4' my={3}>
                why choose Klook
            </Typography>
            <Grid style={{ justifyContent: 'center' }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map(card => (
                    <Grid item xs={8} md={3}>
                        <Cards cardInfo={card} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Why