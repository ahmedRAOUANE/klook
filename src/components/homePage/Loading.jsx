import React from "react";
import {Grid, Box, Skeleton, Container} from "@mui/material";

export default function skeleton() {
    return (
        <Container sx={{ overflow: "hidden" }}>
            <Grid container spacing={2} style={{ justifyContent: 'center' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(new Array(4)).map((item, index) => (
                    <Grid item key={index} xs={8} md={3}>
                        <Skeleton variant="rectangular" height={180} />
                        <Skeleton />
                        <Skeleton width={60} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
