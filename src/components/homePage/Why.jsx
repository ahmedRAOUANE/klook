import React from 'react';
import { Container, Grid, Typography } from "@mui/material"
import Cards from './Cards';
import useGetData from '../useGetData';

import Loading from "./Loading"

const Why = () => {

    const data = useGetData("why");

    return (
        <Container sx={{ mb: 6 }}>
            <Typography component={"h2"} variant='h4' my={3}>
                why choose Klook
            </Typography>
            {data.loading ? <Loading /> : (
                <Grid style={{ justifyContent: 'center' }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.data.map((card, idx) => (
                        <Grid item xs={8} md={3} key={idx}>
                            <Cards cardInfo={card} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default Why