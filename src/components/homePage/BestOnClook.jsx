import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HotArea from '../navbar/HotArea'

const BestOnClook = () => {
    return (
        <Container>
            <Typography gutterBottom component={"h4"} variant='h3' >best on clook</Typography>
            <Grid container spacing={2}>
                <Grid item xs={10} md={4} margin={"auto"}>
                    <HotArea />
                </Grid>
                <Grid item xs={10} md={4} margin={"auto"}>
                    <HotArea />
                </Grid>
                <Grid item xs={10} md={4} margin={"auto"}>
                    <HotArea />
                </Grid>
            </Grid>
        </Container>
    )
}

export default BestOnClook