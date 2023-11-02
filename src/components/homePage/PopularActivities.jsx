import React from 'react';

// components
import Cards from './Cards';
import Loading from "./Loading";

// custom hook
import useGetData from '../useGetData';

// mui components
import { Button, Container, Grid, Typography } from '@mui/material';

const PopularActivities = () => {
    const data = useGetData("activities");

    return (
        <Container sx={{ mb: 6 }}>
            <Typography component={"h2"} variant='h4' my={3}>
                Popular activities
                <Button style={{ float: "right", color: 'black' }}>see more</Button>
            </Typography>
            {data.loading ? <Loading /> : (
                <Grid style={{ alignItems: "flex-end" }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.data.map((card, idx) => (
                        <Grid item xs={8} md={3} key={card.id} style={{ display: idx < 4 ? 'block' : 'none' }}>
                            <Cards cardInfo={card} lnk="activity" />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default PopularActivities
